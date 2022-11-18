import React from 'react'
import Car from './../../../img/car.jfif'
import Plus from './../../../img/plus.jfif'

import "./Main.scss"

const Main = () => {
  return (
    <div className='main'>
        <div className='main__item item-main'>
            <img className='item-name__img' src={Car} height={200} width={200}/>
            <h1 className='item-name__title'>Toyota 2005</h1>
        </div>
        <div className='main__item item-main'>
            <img className='item-name__img' src={Plus}/>
        </div>
    </div>
  )
}

export default Main