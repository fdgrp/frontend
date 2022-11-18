import React from 'react'
import ButtonPrompt from '../../Prompt/ButtonPrompt/ButtonPrompt'

import './FormsAuth.scss'


export default function FormLogin() {

  function loginRequest() {

  }

  return (
    <form className='form-auth' id="form-login" onSubmit={() => loginRequest()}>
      <input name="username" type="text" className='form-auth__field' placeholder='Username' autoComplete='off' />
      <input name="password" type="password" className='form-auth__field' placeholder="Password" autoComplete='off' />
      <div className='buttons-prompt'>
        <ButtonPrompt name="Login" function={() => loginRequest()} />
      </div>
    </form>
  )
}
