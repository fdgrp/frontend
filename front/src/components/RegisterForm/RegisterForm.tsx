import React, { useState } from 'react'
import { UserService } from '../../api/UserService'
import { usePost } from '../../hooks/usePost'
import Button from '../Button/Button'
import Input from '../Input/Input'

const RegisterForm = () => {

    const [name, nameSet] = useState<string>("")
    const [passwordMain, passwordMainSet] = useState<string>("")
    const [passwordSecond, passwordSecondSet] = useState<string>("")
    const [login, loginSet] = useState<string>("")


    const SendForm = (event: any) => {

        event.preventDefault()

        const userService = new UserService()
        if(passwordMain === passwordSecond){

            userService.register(name, login, passwordMain)
        }

    }

    return (
        <form className='register__form' onSubmit={(e) => SendForm(e)}>
            <Input value={name} setValue={nameSet} placeholder="ФИО" />
            <Input value={login} setValue={loginSet} placeholder="Логин" />
            <Input value={passwordMain} setValue={passwordMainSet} placeholder="Пароль" />
            <Input value={passwordSecond} setValue={passwordSecondSet} placeholder="Пароль еще раз" />

            <Button name="Отправить" />
        </form>
    )
}

export default RegisterForm


