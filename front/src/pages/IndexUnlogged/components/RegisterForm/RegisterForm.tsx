import React, { useState } from 'react'
import { usePost } from '../../../../hooks/usePost'

const RegisterForm = () => {

    const [name, nameSet] = useState<string>()
    const [passwordMain, passwordMainSet] = useState<string>()
    const [passwordSecond, passwordSecondSet] = useState<string>()
    const [login, loginSet] = useState<string>()


    const SendForm = (event: any) => {

        event.preventDefault()

            usePost('http://10.1.0.149:8080/api/user/reg',
                {
                    name: name,
                    login: login,
                    password: passwordMain,
                }).then((data) => console.log(data))
        

    }

    return (
        <form className='register__form' onSubmit={(e) => SendForm(e)}>
            <input value={name} onChange={(e) => nameSet(e.target.value)} />
            <input value={login} onChange={(e) => loginSet(e.target.value)} />
            <input value={passwordMain} onChange={(e) => passwordMainSet(e.target.value)} />
            <input value={passwordSecond} onChange={(e) => passwordSecondSet(e.target.value)} />
            <button >Submit</button>
        </form>
    )
}

export default RegisterForm


