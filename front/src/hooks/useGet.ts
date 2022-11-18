import axios from "axios";


export const useGet = (link: string) => {
  return fetch(link, {
      method: "GET",
  })
}