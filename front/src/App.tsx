import React, { FC, useEffect } from 'react'
import { API } from './api/API';
import { UserService } from './api/UserService';
import AppRouter from './components/AppRouter';
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';

import './styles/App.scss';

const App: FC = () => {
  
  const { setUser, setIsAuth } = useActions()

  const { prompt } = useTypedSelector(state => state.prompt);

  const checkUser = async () => {
    const userService = new UserService()
    const response: Response = await userService.get()
    if (response.status == 200) {
      const responseJSON: { access_token: string, id: number, name: string } = await response.clone().json()
      setUser({
        username: responseJSON['name']
      })
      setIsAuth(true)
    } else {
      setUser({
        username: ""
      })
      setIsAuth(false)
    }
  }

  useEffect(() => {
    checkUser()
  }, [])


  return (
    <>
      {prompt}
      <AppRouter />
    </>
  )
}

export default App