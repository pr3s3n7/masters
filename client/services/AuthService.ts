import $api from "../http";
import {AxiosResponse} from "axios"
import {AuthResponse} from "../models/response/AuthResponse";

export default class AuthService {
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post('/login', {email, password})
    }

    static async registration(login: string, email: string, password: string): Promise<AxiosResponse<AuthResponse>> {
        return $api.post('/registration', {login, email, password})
    }

    static async logout(): Promise<void> {
        return $api.post('/logout')
    }

    static async delete(): Promise<void> {
        return $api.delete('/delete')
    }

    static async save(name: string, login: string, email: string, password: string, about: string): Promise<void> {
        return $api.post('/save', { name, login, email, password, about })
    }
}