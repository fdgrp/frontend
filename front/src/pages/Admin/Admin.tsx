import React from 'react'
import { useTypedSelector } from '../../hooks/useTypedSelector';

import "./Admin.scss"

const Admin = () => {

  const { user } = useTypedSelector(state => state.auth);


  return (
    <div className='admin'>
      {!user['superUser'] ?
        <div className='admin__inner'>
          <div className='admin__section section-admin'>
            <h1 className='section-admin__title'>Пользователи</h1>
            <div className='section-admin__fields'>
              <div className='section-admin__field'>
                <h1 className='section-admin__field-name'>qwe</h1>
                <button className='section-admin__field-delete'>+</button>
              </div>
            </div>
          </div>
          <div className='admin__section section-admin'>
            <h1 className='section-admin__title'>Машины</h1>
            <div className='section-admin__fields'>
              <div className='section-admin__field'>
                <h1 className='section-admin__field-name'>Toyota 2005</h1>
                <button className='section-admin__field-delete'>+</button>
              </div>
            </div>
          </div>
        </div>
        : <></>}
    </div>
  )
}

export default Admin