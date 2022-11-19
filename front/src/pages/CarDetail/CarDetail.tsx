import React from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../../api/API'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import CarInfo from './components/CarInfo/CarInfo'

const CarDetail = () => {

  const { cars } = useTypedSelector(state => state.cars);

  const { id } = useParams()
  if(id){
    for(let i = 0; i < cars.length; i++){
      let currentCar = cars[i]
      if(currentCar['id'] == id){
        console.log(currentCar)
        localStorage.setItem("currentCar", JSON.stringify(currentCar))
      }
    }
    
  }
  return (
    <>
      <CarInfo id={id}/>
    </>
  )
}

export default CarDetail