import React, { useState } from 'react'
import { UserService } from '../../api/UserService'
import { usePost } from '../../hooks/usePost'
import Button from '../Button/Button'
import Input from '../Input/Input'

const LoginForm = () => {

    const [password, passwordSet] = useState<string>("")
    const [login, loginSet] = useState<string>("")


    const SendForm = (event: any) => {

        event.preventDefault()

        const userService = new UserService()
        userService.login(login, password)

    }

    return (
        <form className='register__form' onSubmit={(e) => SendForm(e)}>
            <Input value={login} setValue={loginSet} placeholder="Логин" />
            <Input value={password} setValue={passwordSet} placeholder="Пароль" />

            <Button name="Отправить" />
        </form>
    )
}

export default LoginForm


