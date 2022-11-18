import axios from "axios";

export const usePost = (link: string, data: object) => {
    return fetch(link, {
        method: "POST",
        body: JSON.stringify(data)
    })
}
