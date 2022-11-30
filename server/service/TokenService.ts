import jwt from 'jsonwebtoken'
import TokenModel from "../models/TokenModel"
import dotenv from 'dotenv'
import * as path from "path";
import tokenModel from "../models/TokenModel";

dotenv.config({ path: path.resolve(__dirname, "../.env") })

class TokenService {
    generateTokens(payload) {
        const accessToken =  jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '30m'})
        const refreshToken =  jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    async validateAccessToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_ACCESS_SECRET)
        } catch (e) {
            return null
        }
    }

    async validateRefreshToken(token) {
        try {
            return jwt.verify(token, process.env.JWT_REFRESH_SECRET)
        } catch (e) {
            return null
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await TokenModel.findOne({ where: {userId} })
        if (tokenData) {
            //const tokenDataModel = new TokenModel(tokenData)
            tokenData['refreshToken'] = refreshToken // tokenDataModel
            return await tokenData.save() //TokenModel.table, "userId" //tokenDataModel.save()
        }
        return await TokenModel.create({ userId, refreshToken }) // {userId}, { userId, refreshToken }, TokenModel
    }

    async removeToken(refreshToken) {
        return await TokenModel.destroy({ where: {refreshToken} }) // { refreshToken }, TokenModel
    }

    async findToken(refreshToken) {
        return await tokenModel.findOne({where: {refreshToken}})
    }
}

export default new TokenService()