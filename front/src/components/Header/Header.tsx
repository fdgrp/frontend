import React from 'react'
import { Link } from 'react-router-dom'
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import RegisterForm from '../../pages/IndexUnlogged/components/RegisterForm/RegisterForm';
import Prompt from '../Prompt/Prompt';

import './Header.scss'

const Header = () => {

  const { setPrompt } = useActions()
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

  return (
    <div className="header">
      <div className="header__inner">
        <Link className="header__logo" to="/">ЭлектроПТС</Link>
        <div className="header__drop">
          {isAuth ?
            <>
              <div className="header__navbar navbar-header">
                <a className="navbar-header__link">Мои электромобили</a>
                <a className="navbar-header__link">Страховка</a>
              </div>
              <div className="header__profile profile-header">
                <button className='profile-header__avatar-button'><img className='profile-header__avatar' onClick={() => showProfile()} width={60} height={60} src={""} /></button>
                <div className='profile-header__drop'>
                  <div className='profile-header__info'>
                    <Link className='profile-header__avatar-link' to='/'><img className='profile-header__avatar' width={60} height={60} src={""} /></Link>
                    <div className='profile-header__info-text'>
                      <h1 className='profile-header__name'>Имя</h1>
                    </div>
                  </div>
                  <div className='profile-header__links'>
                    <Link to='/' className='profile-header__link'>Профиль</Link>
                    <Link to='/' className='profile-header__link'>Настройки</Link>
                    <button className='profile-header__link' onClick={() => null}>Выйти</button>
                  </div>
                </div>
              </div>
            </>
            :
            <>
              <button className='profile-header__link' onClick={() => setPrompt(
                <Prompt title="Войти">
                </Prompt>
              )}>Войти</button>
              <button className='profile-header__link' onClick={() => setPrompt(
                <Prompt title="Регистрация">
                  <RegisterForm />
                </Prompt>
              )}>Регистрация</button>
            </>}

        </div>
        <label className="header__burger burger-header" onClick={() => showDrop()}>
          <span className="burger__toggle"></span>
        </label>
      </div>
    </div>
  )
}

export default Header


