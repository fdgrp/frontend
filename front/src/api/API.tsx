export class API {
    link = "http://10.1.0.149:8080"

    async postRequest(path: string, data: object = {}){
        return fetch(this.link + path, {
            method: "POST",
            body: JSON.stringify({...data, access_token: this.getCookie("access_token")})
        })
    }
    setCookie(name: string, value: string, options: {[key: string] : any}) {
        options = {
          path: '/',
          ...options
        };
      
        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
      
        for (let optionKey in options) {
          updatedCookie += "; " + optionKey;
          let optionValue = options[optionKey];
          if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
          }
        }
      
        document.cookie = updatedCookie;
      }

      deleteCookie(name: string) {
        this.setCookie(name, "", {
          'max-age': -1
        })
      }
      getCookie(name: string) {
        let matches = document.cookie.match(new RegExp(
          "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
      }
}