import React, { useEffect } from 'react'
import Main from './components/Main/Main'

const IndexLogged = () => {
  
  useEffect(() => {
    return () => {
      document.querySelector('.header__drop')?.classList.remove('_active')
      document.querySelector('.header__burger')?.classList.remove('_active')
      document.body?.classList.remove('_menu')
    }
  }, [])
  return (
    <>
        <Main />
        
    </>
  )
}

export default IndexLogged