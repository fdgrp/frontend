import React from 'react'
import { Link } from 'react-router-dom'

import './Header.scss'

const Header = () => {

  function showDrop(): void {
    document.body.classList.toggle("_menu")
    document.querySelector(".header__drop")!.classList.toggle("_active")
    document.querySelector(".header__burger")!.classList.toggle("_active")
  }

  return (
    <div className="header">
      <div className="header__inner">
        <Link className="header__logo" to="/">ЭлектроПТС</Link>
        <div className="header__drop">
          <div className="header__navbar navbar-header">
            <a className="navbar-header__link">Мои электромобили</a>
            <a className="navbar-header__link">Страховка</a>
          </div>
          <div className="header__user user-header">
            <Link className="user-header__link" to="/">
              <img className="user-header__img" width="60" height="60" src='https://yt3.ggpht.com/ytc/AMLnZu_mkwjt452FnurAvFFv2D1KGrVA4-UcXYXklNEIRg=s900-c-k-c0x00ffffff-no-rj'/>
            </Link>
          </div>
        </div>
        <label className="header__burger burger-header" onClick={() => showDrop()}>
          <span className="burger__toggle"></span>
        </label>
      </div>
    </div>
  )
}

export default Header