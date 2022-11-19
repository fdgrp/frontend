import React from 'react'
import { useParams } from 'react-router-dom'
import { API } from '../../api/API'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import CarInfo from './components/CarInfo/CarInfo'

const CarDetail = () => {

  const { cars } = useTypedSelector(state => state.cars);

  const { id } = useParams()
  if(id){
    console.log(cars)

  }
  return (
    <>
      <CarInfo />
    </>
  )
}

export default CarDetail