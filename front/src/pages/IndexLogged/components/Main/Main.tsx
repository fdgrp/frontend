import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../../../api/API'
import { useActions } from '../../../../hooks/useActions'
import { useGet } from '../../../../hooks/useGet'
import { useTypedSelector } from '../../../../hooks/useTypedSelector'
import { ICar } from '../../../../models/ICar'
// import Car from './../../../img/car.jfif'
// import Plus from './../../../img/plus.jfif'

import "./Main.scss"

const Main = () => {

  const [carsMain, carsMainSet] = useState<ICar[]>([])

  const { cars } = useTypedSelector(state => state.cars);


  const getCars = async () => {
    carsMainSet(cars)
  }


  useEffect(() => {
    getCars()
  }, [])


  return (
    <div className="main">
      <div className='container'>
        <div className='main__inner'>
          {carsMain.length ? cars.map((car) =>
            <Link to={"/cars/" + car['id']} key={car['id']} className='main__item item-main'>
              <img className='item-main__img' height={200} width={300} src="https://github.com/fdgrp/res/blob/main/images/car.png?raw=true" />
              <h1 className='item-main__title'>{car['vehicle']['model']}</h1>
            </Link>
          ) : <></>}
          <Link to='/add' className='main__item item-main'>
            <img className='item-main__plus' height={100} width={100} src="https://github.com/fdgrp/res/blob/main/images/plus.png?raw=true" />
            <h1 className='item-main__title'>Проверить машину</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Main