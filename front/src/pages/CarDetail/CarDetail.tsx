import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
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


  useEffect(() => {
    return () => {
      document.querySelector('.header__drop')?.classList.remove('_active')
      document.querySelector('.header__burger')?.classList.remove('_active')
      document.body?.classList.remove('_menu')
    }
  }, [])

  return (
    <>
      <CarInfo id={id}/>
    </>
  )
}

export default CarDetail