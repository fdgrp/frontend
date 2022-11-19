import React, { FC, useEffect } from 'react'
import { API } from './api/API';
import { UserService } from './api/UserService';
import AppRouter from './components/AppRouter';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';

import './styles/App.scss';

const App: FC = () => {
  
  const { setUser, setIsAuth, setCars } = useActions()

  const { prompt } = useTypedSelector(state => state.prompt);

  const getCars = async () => {
    const api = new API()

    const response: Response = await api.postRequest("/api/car/get")
    const responseJSON = response.clone().json()
    setCars(await responseJSON)
  }

  const checkUser = async () => {
    const userService = new UserService()
    const response: Response = await userService.get()
    if (response.status == 200) {
      const responseJSON: { access_token: string, id: number, login: string } = await response.clone().json()
      setUser({
        login: responseJSON['login'],
        superUser: false
      })
      setIsAuth(true)
    } else {
      setUser({
        login: "",
        superUser: false
      })
      setIsAuth(false)
    }
  }

  useEffect(() => {
    checkUser()
    getCars()
  }, [])


  return (
    <>
      {prompt}
      <Header />
      <AppRouter />
      <Footer />
    </>
  )
}

export default App