import TokenModel from "../models/TokenModel";
import userService from "../service/UserService";
import dotenv from "dotenv";
import path from "path";
import {validationResult} from "express-validator";
import ApiError from "../extensions/ApiError";

dotenv.config({ path: path.resolve(__dirname, "../.env") })

class UserController {
    async registration(req, res, next) {
        try {
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }
            const {login, email, password} = req.body
            const userData = await userService.registration(login, email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true, secure: true})
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }
    async login(req, res, next) {
        try {
            const {email, password} = req.body
            const userData = await userService.login(email, password)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true, secure: true})
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }
    async logout(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const token = await userService.logout(refreshToken)
            res.clearCookie('refreshToken')
            return res.json(token)
        } catch (e) {
            next(e)
        }
    }
    async activate(req, res, next) {
        try {
            const activationLink = req.params.link
            await userService.activate(activationLink)
            return res.redirect(process.env.CLIENT_URL)
        } catch (e) {
            next(e)
        }
    }
    async refresh(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            const userData = await userService.refresh(refreshToken)
            console.log(refreshToken)
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true, secure: true})
            return res.json(userData)
        } catch (e) {
            next(e)
        }
    }
    async delete(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            res.clearCookie('refreshToken')
            const response = await userService.delete(refreshToken)
            return res.json(response)
        } catch (e) {
            next(e)
        }
    }
    async save(req, res, next) {
        try {
            const { name, login, email, password, about } = req.body
            const {refreshToken} = req.cookies
            const response = await userService.save(name, login, email, password, about, refreshToken)
            return res.json(response)
        } catch (e) {
            next(e)
        }
    }
}

export default new UserController()