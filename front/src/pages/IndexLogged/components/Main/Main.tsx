import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../../../api/API'
import { useGet } from '../../../../hooks/useGet'
// import Car from './../../../img/car.jfif'
// import Plus from './../../../img/plus.jfif'

import "./Main.scss"

const Main = () => {

    useEffect(() => {
        const api = new API()
        console.log(api.getRequest("/api/car/get"))
    }, [])
    

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
                    <Link to='/add' className='main__item item-main'>
                        <img className='item-main__img' height={300} width={300} />
                        <h1 className='item-main__title'>Добавить машину</h1>

                    </Link>
                </div>
            </div>
        </div>

    )
}

export default Main