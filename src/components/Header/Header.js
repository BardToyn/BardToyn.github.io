import { useRef } from "react";
import {NavLink} from "react-router-dom"

import "./style.css";

import BurgerIcon from "../Icon/BurgerIcon";
import CloseIcon from "../Icon/CloseIcon";

function Header () {
    window.addEventListener('scroll', function() {
        let lastScrollY = window.pageYOffset;

        if (lastScrollY > 50) {
          document.querySelector('.header').classList.add('header-active')
        } else {
          document.querySelector('.header').classList.remove('header-active')
        }
    })

    const navRef = useRef();

    const showNavBar = () => {
      navRef.current.classList.toggle('responsive-nav');
    }

    return (
        <header className="header">
            <NavLink to="/" className="link">
                <div className="logo-wrapper">
                    <p className="logo-icon">
                        UX
                    </p>
                    <p className="logo-text">BardToyn</p>
                    <span className="logo-circul"></span>
                    <p className="logo-text">Portfolio</p>
                </div>
            </NavLink>
            <nav className="header-nav">
                <NavLink to="/" className="header-link">
                    <span className="link-num">01.</span>
                    Главная
                </NavLink>
                <NavLink to="/about" className="header-link">
                    <span className="link-num">02.</span>
                    Обо мне
                </NavLink>
                <NavLink to="/work" className="header-link">
                    <span className="link-num">03.</span>
                    Проекты
                </NavLink>
                <NavLink to="/contact" className="header-link">
                    <span className="link-num">04.</span>
                    Контакты
                </NavLink>
            </nav>
            <nav ref={navRef} className="mobile-nav">
                <a onClick={showNavBar} href={"#home"} className="header-link">
                    <span className="link-num">01.</span>
                    Главная
                </a>
                <a onClick={showNavBar} href={"#about"} className="header-link">
                    <span className="link-num">02.</span>
                    Обо мне
                </a>
                <a onClick={showNavBar} href={"#project"} className="header-link">
                    <span className="link-num">03.</span>
                    Проекты
                </a>
                <a onClick={showNavBar} href={"#contact"} className="header-link">
                    <span className="link-num">04.</span>
                    Контакты
                </a>
                <button onClick={showNavBar} className="nav-btn nav-close-btn">
                    <CloseIcon />
                </button>
            </nav>
            <button onClick={showNavBar} className="nav-btn">
                <BurgerIcon />
            </button>
        </header>
    );
}
 
export default Header;