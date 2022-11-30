import bcrypt from 'bcrypt'
import { v4 } from 'uuid'
import mailService from "./MailService";
import UserModel from '../models/UserModel'
import tokenService from "./TokenService";
import UserDto from "../dto/UserDto";
import dotenv from 'dotenv'
import path from "path";
import ApiError from "../extensions/ApiError";

dotenv.config({ path: path.resolve(__dirname, "../.env") })

class UserService {
    async registration(login, email, password) {
        const candidate = await UserModel.findOne({ where: {email} })
        if (candidate) {
            throw ApiError.BadRequest(`Пользователь с таким почтовым адресом (${email}) уже существует!`)
        } else {
            const hashPassword = await bcrypt.hash(password, 3)
            const activationLink = v4()

            const user = await UserModel.create({ login, email, password: hashPassword, activationLink })
            await mailService.sendActivationMail(email, `${process.env.API_URL}/api/activate/${activationLink}`)

            const userDto = new UserDto(user)
            const tokens = tokenService.generateTokens({ ...userDto })
            await tokenService.saveToken(user['id'], tokens.refreshToken)

            return { ...tokens, user: userDto }
        }
    }

    async activate(activationLink) {
        const user = await UserModel.findOne({ where: {activationLink} })
        if (!user) {
            throw ApiError.BadRequest('Недействительная ссылка активации')
        }
        user['isActivated'] = true
        await user.save()
    }

    async login(email, password) {
        const user = await UserModel.findOne({where: {email}})
        if (!user) {
            throw ApiError.BadRequest("Пользователь с таким E-mail не был найден")
        }
        const isPassEquals = await bcrypt.compare(password, user['password'])
        if (!isPassEquals) {
            throw ApiError.BadRequest("Некорректный пароль")
        }
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(user['id'], tokens.refreshToken)

        return { ...tokens, user: userDto }
    }

    async logout(refreshToken) {
        return await tokenService.removeToken(refreshToken)
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
        const userData = await tokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await tokenService.findToken(refreshToken)
        if (!userData || !tokenFromDb) {
            throw ApiError.UnauthorizedError()
        }
        const user = await UserModel.findOne({where: { id: userData.id }})
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(user['id'], tokens.refreshToken)

        return { ...tokens, user: userDto }
    }

    async delete(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }
        const token = await tokenService.findToken(refreshToken)
        await UserModel.destroy({ where: { id: token['userId'] }})
        return await tokenService.removeToken(refreshToken)
    }

    async save(name, login, email, password, about, refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }

        const token = await tokenService.findToken(refreshToken)

        if (password) {
            const hashPassword = await bcrypt.hash(password, 3)
            await UserModel.update({name, login, email, password: hashPassword, about}, {where: {id: token['userId']}})
        }

        await UserModel.update({name, login, email, about}, {where: {id: token['userId']}})
    }
}

export default new UserService()