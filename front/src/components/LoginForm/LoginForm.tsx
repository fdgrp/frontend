import React, { useState } from 'react'
import { UserService } from '../../api/UserService'
import { useActions } from '../../hooks/useActions'
import { usePost } from '../../hooks/usePost'
import Button from '../Button/Button'
import Input from '../Input/Input'

const LoginForm = () => {

    const [password, passwordSet] = useState<string>("")
    const [login, loginSet] = useState<string>("")

    const { setUser, setIsAuth, setPrompt } = useActions()



    const sendForm = async (event: any) => {

        event.preventDefault()

        const userService = new UserService()
        const response: Response = await userService.login(login, password)
        if(response.status == 200){
            const responseJSON: {token: string, id: number, name: string} = await response.clone().json()
            setUser({
                username: responseJSON['name']
            })
            setIsAuth(true)
            setPrompt(<></>)
            localStorage.setItem("token", responseJSON['token'])
        } else {
            console.log(response.statusText)
        }

    }

    return (
        <form className='register__form' onSubmit={(e) => sendForm(e)}>
            <Input value={login} setValue={loginSet} placeholder="Логин" />
            <Input value={password} setValue={passwordSet} placeholder="Пароль" />

            <Button name="Отправить" />
        </form>
    )
}

export default LoginForm


