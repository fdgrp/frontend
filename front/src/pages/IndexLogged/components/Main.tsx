import React from 'react'
import RegisterForm from '../../IndexUnlogged/components/RegisterForm/RegisterForm'
// import Car from './../../../img/car.jfif'
// import Plus from './../../../img/plus.jfif'

import "./Main.scss"

const Main = () => {
    return (
        <div className="main">
            <div className='container'>
                <div className='main__inner'>
                    <a className='main__item item-main'>
                        <img className='item-main__img' height={300} width={300} />
                        <h1 className='item-main__title'>Toyota 2005</h1>
                    </a>
                    <a className='main__item item-main'>
                        <img className='item-main__img' height={300} width={300} />
                        <h1 className='item-main__title'>Toyota 2005</h1>
                    </a>
                    <a className='main__item item-main'>
                        <img className='item-main__img' height={300} width={300} />
                        <h1 className='item-main__title'>Toyota 2005</h1>
                    </a>

                    <a className='main__item item-main'>
                        <img className='item-main__img' height={300} width={300} />
                        <h1 className='item-main__title'>Add new car</h1>

                    </a>
                </div>
            </div>
        </div>

    )
}

export default Main