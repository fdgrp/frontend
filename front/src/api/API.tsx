export class API {
    link = "https://3e17-46-18-203-145.eu.ngrok.io"

    async getRequest(path: string){
        return fetch(this.link + path, {
            method: "GET",
        })
    }
    async postRequest(path: string, data: object){
        return fetch(this.link + path, {
            method: "POST",
            body: JSON.stringify(data)
        })
    }
}