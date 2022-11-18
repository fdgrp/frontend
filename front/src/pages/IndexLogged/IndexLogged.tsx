import axios from 'axios'
import React from 'react'
import Header from '../../components/Header/Header'
import { useAxiosPost } from '../../hooks/useAxiosPost'
import Main from './components/Main'

const IndexLogged = () => {
    axios.post('http://10.1.0.149:8080/api/user/reg', {})
  return (
    <>
        <Header />
        <Main />
    </>
  )
}

export default IndexLogged