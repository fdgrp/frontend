import { useActions } from "../hooks/useActions"
import { API } from "./API"

export class UserService {



    API = new API()
    async register(name: string, login: string, password: string): Promise<Response> {
        const response: Response = await this.API.postRequest("/api/user/reg", { name, login, password })
        return (await response)

    }
    async login(login: string, password: string): Promise<Response> {
        const response: Response = await this.API.postRequest("/api/user/auth", { login, password })
        return (await response)

    }
    async get(): Promise<Response> {
        const response: Response = await this.API.postRequest("/api/user/get")
        return (await response)

    }
}