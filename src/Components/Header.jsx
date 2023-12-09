import React from 'react'

import '../Styles/Header.css'
import '../index.css'

import LogoHammerOrange from '../Images/logohammerorange.png'
const Header = () => {
  return (
       
      // <!--==================== HEADER ====================-->
    <header className="header" id="header">
        <nav className="nav container">
            <a href="#" className="nav_logo">
                <img src={LogoHammerOrange} alt="logos"/>
            </a>

            <div className="nav_menu" id="nav-menu">
                <ul className="nav_list">
                    <li className="nav_item">
                        <a href="#home" className="nav_link active-link">Inicio</a>
                    </li>
                    <li className="nav_item">
                        <a href="#program" className="nav_link ">Programas</a>
                    </li>
                    <li className="nav_item">
                        <a href="#choose" className="nav_link ">Contacto</a>
                    </li>
                    <li className="nav_item">
                        <a href="#pricing" className="nav_link ">Quienes Somos</a>
                    </li>
                    <div className="nav_link">
                        <a href="#footer" className="button nav_button">
                            Subscribite!
                        </a>
                    </div>
                </ul>
                <div className="nav_close" id="nav-close">
                    <i className="ri-close-circle-line"></i>
                </div>
            </div>
            {/* <!-- toggle button --> */}
            <div className="nav_toggle" id="nav-toggle">
                <i className="ri-list-unordered"></i>
            </div>
        </nav>
      </header>
  )
}

export default Header