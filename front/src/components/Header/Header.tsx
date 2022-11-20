import React from 'react'
import { Link } from 'react-router-dom'
import { API } from '../../api/API';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import LoginForm from '../LoginForm/LoginForm';
import Prompt from '../Prompt/Prompt';
import RegisterForm from '../RegisterForm/RegisterForm';

import './Header.scss'

const Header = () => {

  const { setPrompt, setIsAuth, setUser } = useActions()
  const { isAuth, user } = useTypedSelector(state => state.auth);

  function showDrop(): void {
    document.body.classList.toggle("_menu")
    document.querySelector(".header__drop")!.classList.toggle("_active")
    document.querySelector(".header__burger")!.classList.toggle("_active")
  }

  function showProfile(): void {
    document.querySelector(".profile-header__drop")!.classList.toggle("_active")
    document.addEventListener("click", closeIfClicked, false)
  }

  function closeIfClicked(event: any): void {
    if (event.target.closest(".profile-header__drop") == null && !(event.target.classList.contains("profile-header__avatar"))) {
      document.querySelector(".profile-header__drop")!.classList.remove("_active")
      document.removeEventListener("click", closeIfClicked, false)
    }
  }

  function logout() {
    setIsAuth(false)
    setUser({
      login: "",
      token: "",
      superUser: false
    })
    localStorage.removeItem('access_token')
    document.getElementById('logo')?.click()

  }

  return (
    <div className="header">
      <div className="header__inner">
        <Link id='logo' className="header__logo" to="/">ЭлектроПТС</Link>
        <div className="header__drop">
          {isAuth ?
            <>
              <div className="header__navbar navbar-header">
                <Link to="/" className="navbar-header__link">Мои электромобили</Link>
                <Link to="/notRealised" className="navbar-header__link">Страховка</Link>
                <Link to="/notRealised" className="navbar-header__link">Карта</Link>

              </div>
              <div className="header__profile profile-header">
                <button className='profile-header__avatar-button'><img className='profile-header__avatar' onClick={() => showProfile()} width={60} height={60} src={"https://github.com/fdgrp/res/blob/main/images/user.png?raw=true"} /></button>
                <div className='profile-header__drop'>
                  <div className='profile-header__info'>
                    <Link className='profile-header__avatar-link' to='/'><img className='profile-header__avatar' width={60} height={60} src={"https://github.com/fdgrp/res/blob/main/images/user.png?raw=true"} /></Link>
                    <div className='profile-header__info-text'>
                      <h1 className='profile-header__name'>{user['login'] ? user['login'] : "Имя"}</h1>
                    </div>
                  </div>
                  <div className='profile-header__links'>
                    <Link to='/notRealised' className='profile-header__link'>Профиль</Link>
                    <Link to='/notRealised' className='profile-header__link'>Настройки</Link>
                    <button className='profile-header__link' onClick={() => logout()}>Выйти</button>
                  </div>
                </div>
              </div>
            </>
            :
            <>
              <button className='profile-header__link-header' onClick={() => setPrompt(
                <Prompt title="Войти">
                  <LoginForm />
                </Prompt>
              )}>Войти</button>
              <button className='profile-header__link-header' onClick={() => setPrompt(
                <Prompt title="Регистрация">
                  <RegisterForm />
                </Prompt>
              )}>Регистрация</button>
            </>}

        </div>
        <div className='header__burger-wrapper' onClick={() => showDrop()}>

          <label className="header__burger burger-header" >
            <span className="burger__toggle"></span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default Header


