import React, { FC, useEffect } from 'react'
import AppRouter from './components/AppRouter';
import { useTypedSelector } from './hooks/useTypedSelector';

import './styles/App.scss';

const App: FC = () => {

  const { prompt } = useTypedSelector(state => state.prompt);

  useEffect(() => {
    
  }, [])
  

  return (
    <>
      {prompt}
      <AppRouter />
    </>
  )
}

export default App