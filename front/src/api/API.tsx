export class API {
    link = "http://10.1.0.149:8080"

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