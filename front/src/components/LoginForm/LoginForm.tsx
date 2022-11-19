import React, { useState } from 'react'
import { API } from '../../api/API'
import { UserService } from '../../api/UserService'
import { useActions } from '../../hooks/useActions'
import { usePost } from '../../hooks/usePost'
import Button from '../Button/Button'
import Input from '../Input/Input'

const LoginForm = () => {

  const [password, passwordSet] = useState<string>("")
  const [login, loginSet] = useState<string>("")

  const { setUser, setIsAuth, setPrompt } = useActions()

  const [error, errorSet] = useState<string>("")




  const sendForm = async (event: any) => {

    event.preventDefault()
    const userService = new UserService()
    const response: Response = await userService.login(login.toLowerCase(), password)
    if (response.status == 200) {
      const responseJSON: { access_token: string, id: number, name: string, login: string } = await response.clone().json()
      setUser({
        username: responseJSON['login'],
        superUser: false
      })
      localStorage.setItem("access_token", responseJSON['access_token'])
      setIsAuth(true)
      setPrompt(<></>)
      console.log(await responseJSON);

      const api = new API()
      api.setCookie("access_token", responseJSON['access_token'], {})
    } else {
      errorSet((await response.clone().json())['error'])
    }
  }

  return (
    <form className='register__form' onSubmit={(e) => sendForm(e)}>
      <Input value={login} setValue={loginSet} placeholder="Логин" />
      <Input type="password" value={password} setValue={passwordSet} placeholder="Пароль" />
      <h1 className='register__form-error'>{error}</h1>
      <Button name="Отправить" />
    </form>
  )
}

export default LoginForm


