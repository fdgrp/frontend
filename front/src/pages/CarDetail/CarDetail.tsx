import React from 'react'
import { useParams } from 'react-router-dom'
import CarInfo from './components/CarInfo/CarInfo'

const CarDetail = () => {
  const { id } = useParams()
  if(id){


  }
  return (
    <>
      <CarInfo />
    </>
  )
}

export default CarDetail