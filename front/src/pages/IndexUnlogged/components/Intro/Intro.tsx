import React from 'react'
import Button from '../../../../components/Button/Button'
import Prompt from '../../../../components/Prompt/Prompt'
import RegisterForm from '../../../../components/RegisterForm/RegisterForm'
import { useActions } from '../../../../hooks/useActions'

import "./Intro.scss"

const Intro = () => {
    const { setPrompt } = useActions()

    return (
        <div className='intro'>
            <img className='intro__img' src='https://github.com/fdgrp/res/blob/main/images/driver.png?raw=true' />
            <div className='intro__inner'>
                <div className='intro__info'>
                    <h1 className='intro__title'>Краснодар будущего</h1>
                    <h2 className='intro__subtitle'>Приложение для работы с электромобилями</h2>
                    <button className="intro__button"  onClick={() => setPrompt(
                        <Prompt title="Регистрация">
                            <RegisterForm />
                        </Prompt>
                    )} >Проверить машину</button>
                </div>
            </div>
        </div>
    )
}

export default Intro