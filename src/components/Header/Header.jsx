import React from 'react'
import "./Header.css"
import { logoIcon } from '../../const'

const Header = () => {
  return (
    <header className="header">
        {/* <h1 className="header-h1">pomodoro</h1> */}
        <img src={logoIcon} alt="icon" />
    </header>
  )
}

export default Header