import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../../../api/API'
import { useActions } from '../../../../hooks/useActions'
import { useGet } from '../../../../hooks/useGet'
import { ICar } from '../../../../models/ICar'
// import Car from './../../../img/car.jfif'
// import Plus from './../../../img/plus.jfif'

import "./Main.scss"

const Main = () => {

  const [cars, carsSet] = useState<ICar[]>([])

  const { setCars } = useActions()

  const getCars = async () => {
    const api = new API()

    const response: Response = await api.postRequest("/api/car/get")
    const responseJSON = response.clone().json()
    const result = (await responseJSON)['result']
    const cars = []
    
    if (response.status == 200) {
      for(let i = 0; i < result.length; i++){
        const car_info = JSON.parse(result[i]['car_info'])
        cars.push({
          id: result[i]['id'] as string,
          ...car_info
        })
      }
      console.log(cars);
      
      setCars(cars)
      carsSet(cars)
    } else {

    }
  }

  useEffect(() => {
    getCars()
  }, [])


  return (
    <div className="main">
      <div className='container'>
        <div className='main__inner'>
          {cars.length ? cars.map((car) =>
            <Link to={"/cars/" + car['id']} key={car['id']} className='main__item item-main'>
              <img className='item-main__img' height={200} width={300} src="https://github.com/fdgrp/res/blob/main/images/car.png?raw=true" />
              <h1 className='item-main__title'>{car['id']}</h1>
            </Link>
          ) : <></>}
          <Link to='/add' className='main__item item-main'>
            <img className='item-main__plus' height={100} width={100} src="https://github.com/fdgrp/res/blob/main/images/plus.png?raw=true" />
            <h1 className='item-main__title'>Добавить или проверить машину</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Main