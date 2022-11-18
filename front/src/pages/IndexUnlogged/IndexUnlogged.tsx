import axios from 'axios'
import React, { FC, useEffect } from 'react'
import Header from '../../components/Header/Header'
import { useAxiosGet } from '../../hooks/useAxiosGet'
import { useAxiosPost } from '../../hooks/useAxiosPost'

const IndexUnlogged: FC = () => {
  useEffect(() => {
    useAxiosPost('http://192.168.108.216:8080/api/user/reg', {})
    axios.post('http://192.168.108.216:8080/api/user/reg', {})
    
    
  }, [])
  
  return (
    <Header />
  )
}

export default IndexUnlogged