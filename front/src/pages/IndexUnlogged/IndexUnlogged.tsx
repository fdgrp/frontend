import React, { FC, useEffect } from 'react'
import Intro from './components/Intro/Intro'

const IndexUnlogged: FC = () => {
 

  useEffect(() => {
    return () => {
      document.querySelector('.header__drop')?.classList.remove('_active')
      document.querySelector('.header__burger')?.classList.remove('_active')
      document.body?.classList.remove('_menu')
    }
  }, [])
  
  
  return (
    <Intro />
  )
}

export default IndexUnlogged