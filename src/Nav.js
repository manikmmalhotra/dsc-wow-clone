import React from 'react';
import "./Nav.css";


function Nav() {
    return (
        <nav className="nav__wrapper">
        <ul className="nav__nav">
          <li className="nav__item  nav__logo">
            <a href="#landing__wrapper" className="nav__item__link">
              <img src="https://dscwow.tech/favicon.png" alt="DSC" className="nav__logo__img"/>
            </a>
          </li>
            <li className="nav__item">
                        <a href="#" className="nav__item__link">
                        <i class="fas fa-bowling-ball"></i> 
                        </a>
                    </li>
          <li className="nav__item">
            <a href="#" className="nav__item__link">
              <i className="fas fa-puzzle-piece"></i>
            </a>
          </li>
  
          <li className="nav__item">
            <a href="#schedule" className="nav__item__link">
            <i class="fas fa-microphone"></i>
            </a>
          </li>
  
         
  
          <li className="nav__item">
            <a href="#" className="nav__item__link">
            <i class="fas fa-handshake"></i>  
             </a>
          </li>
  
          <li className="nav__item">
            <a href="#" className="nav__item__link">
              <i className="fa fa-question"></i>
            </a>
          </li>
          </ul>
      </nav>
    )
}

export default Nav
