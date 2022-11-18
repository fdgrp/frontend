import React from 'react'
import Header from '../../components/Header/Header'
import { usePost } from '../../hooks/usePost'
import Main from './components/Main'

const IndexLogged = () => {
    // usePost('http://10.1.0.49:8080/api/user/reg', {})
  return (
    <>
        <Header />
        <Main />

    </>
  )
}

export default IndexLogged