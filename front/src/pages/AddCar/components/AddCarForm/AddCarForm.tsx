import React, { useEffect, useState } from 'react'
import { API } from '../../../../api/API'
import Button from '../../../../components/Button/Button'
import Input from '../../../../components/Input/Input'

import "./AddCarForm.scss"

const AddCarForm = () => {

  const [error, errorSet] = useState()

  const [vin, vinSet] = useState<string>("")
  const [captcha, captchaSet] = useState<string>("")
  const [JSONResponse, JSONResponseSet] = useState<{ token: string, base64jpg: string }>({ token: "", base64jpg: "" })

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
    if (response.status == 200) {
      console.log(responseJSON['RequestResult']);
      localStorage.setItem("currentCar", JSON.stringify(responseJSON['RequestResult']))

      window.history.replaceState(null, "ЭлектроПТС", "/vheck")
    } else {
      errorSet((await response.clone().json())['error'])
      getCaptcha()
      captchaSet("")
    }

  }
  return (
    <>
      <div className='container'>
        <div className='addcar-form'>
          <div className='addcar-form__wrapper'>
            <form className='addcar-form__form' onSubmit={(e) => sendForm(e)}>
              <h1 className='addcar-form__title'>Проверить машину</h1>
              <Input value={vin} setValue={vinSet} placeholder="VIN" />
              <Input value={captcha} setValue={captchaSet} placeholder="Captcha" />
              <div className='addcar-form__captcha'>
                <img id="captcha" alt="captcha" />
              </div>
              <h1 className='addcar-form__error'>{error}</h1>
              <Button name="Отправить" />
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddCarForm