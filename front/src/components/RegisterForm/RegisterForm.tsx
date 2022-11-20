import React, { useState } from 'react'
import { API } from '../../api/API'
import { UserService } from '../../api/UserService'
import { useActions } from '../../hooks/useActions'
import { usePost } from '../../hooks/usePost'
import Button from '../Button/Button'
import Input from '../Input/Input'

import "./RegisterForm.scss"

const RegisterForm = () => {

  const { setUser, setIsAuth, setPrompt, setCars } = useActions()

  const [error, errorSet] = useState<string>("")

  const [name, nameSet] = useState<string>("")
  const [passwordMain, passwordMainSet] = useState<string>("")
  const [passwordSecond, passwordSecondSet] = useState<string>("")
  const [login, loginSet] = useState<string>("")

  const getCars = async (token: string) => {
    const api = new API()

    const response: Response = await api.postRequest("/api/car/get", {"access_token" : token})
    const responseJSON = response.clone().json()
    const result = (await responseJSON)['result']
    const cars = []

    if (response.status == 200) {
      for (let i = 0; i < result.length; i++) {
        const car_info = JSON.parse(result[i]['car_info'])
        cars.push({
          id: result[i]['id'] as string,
          ...car_info
        })
      }
      console.log(cars);

      setCars(cars)
    } 
  }


  const sendForm = async (event: any) => {

    const passwordLength = 8

    event.preventDefault()
    if (passwordMain === passwordSecond) {
      if (passwordMain.length >= passwordLength) {
        errorSet("")
        const userService = new UserService()
        const response: Response = await userService.register(name, login.toLowerCase(), passwordMain)
        if (response.status == 200) {
          const responseJSON: { access_token: string, id: number, name: string, login: string } = await response.clone().json()
          setUser({
            login: responseJSON['login'],
            superUser: false
          })
          localStorage.setItem("access_token", responseJSON['access_token'])
          setIsAuth(true)
          getCars(responseJSON['access_token'])
          setPrompt(<></>)
        } else {
          errorSet((await response.clone().json())['error'])
        }
      } else {
        errorSet("Минимальное количество символов для пароля: " + passwordLength)

      }
    } else {
      errorSet("Пароли не совподают")
    }
  }

  return (
    <form className='register__form' onSubmit={(e) => sendForm(e)}>
      <Input value={name} setValue={nameSet} placeholder="ФИО" />
      <Input value={login} setValue={loginSet} placeholder="Логин" />
      <Input type="password" value={passwordMain} setValue={passwordMainSet} placeholder="Пароль" />
      <Input type="password" value={passwordSecond} setValue={passwordSecondSet} placeholder="Пароль еще раз" />
      <h1 className='register__form-error'>{error}</h1>
      <Button name="Зарегистрироваться" />
    </form>
  )
}

export default RegisterForm


