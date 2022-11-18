import axios from "axios";


export const useAxiosGet = (link: string) => {
    axios.get(link)
    .then(response => {
    console.log(response.data.created_at);
  });
}