import React, { useEffect } from 'react'
import AddCarForm from './components/AddCarForm/AddCarForm'

const AddCar = () => {


  useEffect(() => {
    return () => {
      document.querySelector('.header__drop')?.classList.remove('_active')
      document.querySelector('.header__burger')?.classList.remove('_active')
      document.body?.classList.remove('_menu')
    }
  }, [])

  return (
    <>
      <AddCarForm />
    </>
  )
}

export default AddCar