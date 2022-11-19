import React from 'react'
import Header from '../../components/Header/Header'

import "./NotRealised.scss"

const NotRealised = () => {
  return (
    <>
        <Header />
        <div className='development'>
            <h1 className='development__title'>Мы добавим <b>эту</b> функцию позже...</h1>
        </div>
    </>
  )
}

export default NotRealised