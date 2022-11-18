import React from 'react'
import RegisterForm from '../../IndexUnlogged/components/RegisterForm/RegisterForm'
// import Car from './../../../img/car.jfif'
// import Plus from './../../../img/plus.jfif'

import "./Main.scss"

const Main = () => {
  return (
    <div className='main'>
        <div className='main__inner'>
        <div className='main__item item-main'>
            <img className='item-name__img' height={200} width={200} />
            <h1 className='item-main__title'>Toyota 2005</h1>
        </div>
        <div className='main__item item-main'>
            <img className='item-name__img' height={200} width={200} />
            <h1 className='item-main__title'>Toyota 2005</h1>
        </div>
        <div className='main__item item-main'>
            <img className='item-name__img' height={200} width={200} />
            <h1 className='item-main__title'>Toyota 2005</h1>
        </div>
        <div className='main__item item-main'>
            <img className='item-name__img' height={200} width={200} />
            <h1 className='item-main__title'>Toyota 2005</h1>
        </div>
        <div className='main__item item-main'>
            <img className='item-main__img' height={200} width={200}  />
            <h1 className='item-main__title'>Add new car</h1>

        </div>
        </div>
        <RegisterForm />
    </div>
  )
}

export default Main