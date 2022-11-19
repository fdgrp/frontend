import React, { useEffect, useState } from 'react'
import { API } from '../../../../api/API'
import Button from '../../../../components/Button/Button'
import Input from '../../../../components/Input/Input'

const AddCarForm = () => {

  const [vin, vinSet] = useState<string>("")
  const [captcha, captchaSet] = useState<string>("")
  const [JSON, JSONSet] = useState<{token: string, base64jpg: string}>({token: "", base64jpg: ""})

  const getCaptcha = async () => {

    const api = new API()

    const response: Response = await api.getRequest("/api/car/captcha")
    const responseJSON = response.clone().json()
    JSONSet(await responseJSON)
    let image = new Image();
    image.src = 'data:image/jpeg;base64,' + (await responseJSON)['base64jpg'];
    document.body.appendChild(image);
    
  }

  const getCars = async () => {
    const api = new API()

    const response: Response = await api.postRequest("/api/car/get", {})
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
      captchaToken: JSON['token'],
      captchaWord: captcha
    })
    const responseJSON = await response.clone().json()
    if(response.status == 200){
      console.log(responseJSON)
      getCars()

    } else {
      getCaptcha()
    }

  }
  return (
    <>
    <div className='container'>

      <form className='register__form' onSubmit={(e) => sendForm(e)}>
        <Input value={vin} setValue={vinSet} placeholder="VIN" />
        <Input value={captcha} setValue={captchaSet} placeholder="Captcha" />
        <Button name="Отправить" />
      </form>
    </div>
    </>
  )
}

export default AddCarForm