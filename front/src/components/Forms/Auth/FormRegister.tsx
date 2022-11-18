import React from 'react'
import ButtonPrompt from '../../Prompt/ButtonPrompt/ButtonPrompt'

import './FormsAuth.scss'


export default function FormRegister() {

  function registerRequest() {

  }
  
  return (
      <form className='form-auth' id="form-login" onSubmit={() => registerRequest()}>
        <input name="username" type="text" className='form-auth__field' placeholder="Username" autoComplete='off' />
        <input name="email" type="email" className='form-auth__field' placeholder="E-mail" autoComplete='off' />
        <input name="passwordFirst" type="password" className='form-auth__field' placeholder="Password" autoComplete='off' />
        <input name="passwordSecond" type="password" className='form-auth__field' placeholder="Password again" autoComplete='off' />
        <div className='buttons-prompt'>
          <ButtonPrompt name="Register" function={() => registerRequest()} />
        </div>
      </form>
  )
}
