import React from 'react'
import { API } from '../../../../api/API';
import Button from '../../../../components/Button/Button';

import "./CarInfo.scss"

const CarInfo = (props: any) => {
  let car = JSON.parse(localStorage.getItem("currentCar")!)

  const addCar = async () => {
    const api = new API()
    api.postRequest("/api/car/add", {
      car_info: JSON.stringify(car)
    })
    document.getElementById('logo')?.click()
  }
  
  return (
    <div className='car-info'>
      <img className='car-info__img' src="https://github.com/fdgrp/res/blob/main/images/car.png?raw=true" width="400" height="200" />

      <div className='car-info__section'>
        <div className='car-info__title'>Периоды владения транспортный средством</div>
        {car['ownershipPeriods']['ownershipPeriod'].map((period: any) => 
        <div className='car-info__field'>
          <h1 className='car-info__field-left'>{period['simplePersonType'] == 'Natural' ? "Физическое лицо" : "Юридическое лицо"}</h1>
          <h2 className='car-info__fiel-right'>С {period['from']} по {period['to'] ? period['to'] : "настоящее время"}</h2>
        </div>)}
        
      </div>
      <div className='car-info__section'>
        <div className='car-info__title'>Паспорт ТС</div>
        <div className='car-info__field'>
          <h1 className='car-info__field-left'>Номер</h1>
          <h2 className='car-info__fiel-right'>{car['vehiclePassport']['number']}</h2>
        </div>
        <div className='car-info__field'>

          <h1 className='car-info__field-left'>Место выдачи</h1>
          <h2 className='car-info__fiel-right'>{car['vehiclePassport']['issue']}</h2>
        </div>
      </div>

      <div className='car-info__section'>
        <div className='car-info__title'>О машине</div>
        <div className='car-info__field'>
          <h1 className='car-info__field-left'>Номер корпуса</h1>
          <h2 className='car-info__fiel-right'>{car['vehicle']['bodyNumber']}</h2>
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

          <h1 className='car-info__field-left'>Объем двигателя</h1>
          <h2 className='car-info__fiel-right'>{car['vehicle']['engineVolume']} л</h2>
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
      {!props.id ? <Button name="Добавить машину" function={addCar} /> : <></>}
    </div>
  )
}

export default CarInfo