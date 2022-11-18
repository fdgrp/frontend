import axios from "axios";

export const useAxiosPost = (link: string, data: object) => {
    axios.post(link, data);
    }
