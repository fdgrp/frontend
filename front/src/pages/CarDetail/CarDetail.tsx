import React from 'react'
import { useParams } from 'react-router-dom'
import Button from '../../components/Button/Button'
import Header from '../../components/Header/Header'
import CarInfo from './components/CarInfo/CarInfo'

const CarDetail = () => {
  const { id } = useParams()

  console.log(localStorage.getItem("currentCar"))
  return (
    <>
      <Header />
      {
        id ? <></>
          :
          <>
            <CarInfo />
            <Button name="Добавить себе" />

          </>
      }
    </>
  )
}

export default CarDetail