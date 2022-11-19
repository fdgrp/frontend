import React from 'react'

import "./CarInfo.scss"

const CarInfo = () => {
  let car = JSON.parse(localStorage.getItem("currentCar")!)
  console.log(car);

  return (
    <div className='car-info'>
      <img className='car-info__img' src="https://github.com/fdgrp/res/blob/main/images/car.png?raw=true" width="500" height="200" />

      <div className='car-info__section'>
        <div className='car-info__title'>Период владения транспортный средством</div>
        <div className='car-info__field'>
          <h1 className='car-info__field-left'></h1>
          <h2 className='car-info__fiel-right'></h2>
        </div>
      </div>
      <div className='car-info__section'>
        <div className='car-info__title'>Паспорт ТС</div>
        <div className='car-info__field'>
          <h1 className='car-info__field-left'>Номер</h1>
          <h2 className='car-info__fiel-right'>{car['vehiclePassport']['number']}</h2>
        </div>
        <div className='car-info__field'>

          <h1 className='car-info__field-left'>issue</h1>
          <h2 className='car-info__fiel-right'>{car['vehiclePassport']['issue']}</h2>
        </div>
      </div>

      <div className='car-info__section'>
        <div className='car-info__title'>О машине</div>
        <div className='car-info__field'>
          <h1 className='car-info__field-left'>Объём двигателя</h1>
          <h2 className='car-info__fiel-right'>{car['vehicle']['engineVolume']} м3</h2>
        </div>
        <div className='car-info__field'>

          <h1 className='car-info__field-left'>Цвет</h1>
          <h2 className='car-info__fiel-right'>{car['vehicle']['color']}</h2>
        </div>
        <div className='car-info__field'>

          <h1 className='car-info__field-left'>Категория</h1>
          <h2 className='car-info__fiel-right'>{car['vehicle']['category']}</h2>
        </div>
        <div className='car-info__field'>

          <h1 className='car-info__field-left'>Цвет</h1>
          <h2 className='car-info__fiel-right'>{car['vehicle']['color']}</h2>
        </div>
        <div className='car-info__field'>

          <h1 className='car-info__field-left'>Номер двигателя</h1>
          <h2 className='car-info__fiel-right'>{car['vehicle']['engineNumber']}</h2>
        </div>
        <div className='car-info__field'>

          <h1 className='car-info__field-left'>Модель</h1>
          <h2 className='car-info__fiel-right'>{car['vehicle']['model']}</h2>
        </div>
        <div className='car-info__field'>

          <h1 className='car-info__field-left'>Номер двигателя</h1>
          <h2 className='car-info__fiel-right'>{car['vehicle']['engineNumber']}</h2>
        </div>
        <div className='car-info__field'>

          <h1 className='car-info__field-left'>Мощность</h1>
          <h2 className='car-info__fiel-right'>{car['vehicle']['powerHp']} л/с / {car['vehicle']['powerKwt']} кв</h2>
        </div>
        <div className='car-info__field'>

          <h1 className='car-info__field-left'>ВИН</h1>
          <h2 className='car-info__fiel-right'>{car['vehicle']['vin']}</h2>
        </div>
        <div className='car-info__field'>

          <h1 className='car-info__field-left'>Год выпуска</h1>
          <h2 className='car-info__fiel-right'>{car['vehicle']['year']}</h2>
        </div>
      </div>
    </div>

  )
}

export default CarInfo