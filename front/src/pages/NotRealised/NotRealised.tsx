import React, { useEffect } from 'react'

import "./NotRealised.scss"

const NotRealised = () => {
  
  useEffect(() => {
    return () => {
      document.querySelector('.header__drop')?.classList.remove('_active')
      document.querySelector('.header__burger')?.classList.remove('_active')
      document.body?.classList.remove('_menu')
    }
  }, [])

  return (
    <>
        <div className='development'>
            <h1 className='development__title'>Мы добавим <b>эту</b> функцию позже...</h1>
        </div>
    </>
  )
}

export default NotRealised