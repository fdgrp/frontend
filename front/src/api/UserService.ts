import { usePost } from "../hooks/usePost"
import { API } from "./API"

export class UserService {
    link = "https://3e17-46-18-203-145.eu.ngrok.io"
    API = new API()
    async register(name: string, login: string, password: string): Promise<boolean>{
        this.API.postRequest(this.link + "api/user/reg", {name, login, password})
        return false
    }
    async login(login: string, password: string): Promise<boolean>{
        this.API.postRequest(this.link + "api/user/auth", {login, password})
        return false
    }
}