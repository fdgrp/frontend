import React, { useEffect, useState } from 'react'
import { API } from '../../../../api/API'
import Button from '../../../../components/Button/Button'
import Input from '../../../../components/Input/Input'

const AddCarForm = () => {

  const [vin, vinSet] = useState<string>("")
  const [captcha, captchaSet] = useState<string>("")
  const [JSONResponse, JSONResponseSet] = useState<{token: string, base64jpg: string}>({token: "", base64jpg: ""})

  const getCaptcha = async () => {

    const api = new API()

    const response: Response = await api.postRequest("/api/car/captcha")
    const responseJSON = response.clone().json()
    JSONResponseSet(await responseJSON)    
    const path = 'data:image/jpeg;base64,' + (await responseJSON)['base64jpg'];
    (document.getElementById("captcha") as HTMLImageElement).src = path
    
  }

  const getCars = async () => {
    const api = new API()

    const response: Response = await api.postRequest("/api/car/get")
    const responseJSON = response.clone().json()
    console.log(responseJSON)
  }

  useEffect(() => {
    getCaptcha()
  }, [])

  // XWF0AHL35D0019108 

  const sendForm = async (event: any) => {

    event.preventDefault()

    const api = new API()
    const response: Response = await api.postRequest("/api/car/info", {
      
      vin: vin,
      checkType: "history",
      captchaToken: JSONResponse['token'],
      captchaWord: captcha
    })
    const responseJSON = await response.clone().json()
    if(response.status == 200){
      console.log(responseJSON['RequestResult']);
      localStorage.setItem("currentCar", JSON.stringify(responseJSON['RequestResult']))
      
      window.location.href = "/check"
    } else {
      getCaptcha()
      captchaSet("")
    }

  }
  return (
    <>
    <div className='container'>

      <form className='register__form' onSubmit={(e) => sendForm(e)}>
        <Input value={vin} setValue={vinSet} placeholder="VIN" />
        <Input value={captcha} setValue={captchaSet} placeholder="Captcha" />
        <img id="captcha" alt="captcha" />
        <Button name="Отправить" />
      </form>
    </div>
    </>
  )
}

export default AddCarForm