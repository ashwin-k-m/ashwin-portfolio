import React from 'react'
import './Header.css'
import { useState } from 'react'

function Header() {
    window.addEventListener('scroll', function () {
        const header = document.querySelector('.header')
        if (this.scrollY >= 80) header.classList.add('scroll-header')
        else header.classList.remove('scroll-header')
    })

    const [toggle, showMenu] = useState(false)
    const [activeLink, setActiveLink] = useState('#home')
    return (
        <header className="header">
            <nav className="nav container">
                <a href="/" className="nav__logo">Ashwin</a>
                <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveLink('#home')} className={activeLink === '#home' ? 'nav__link active-link' : 'nav__link'}>
                                <i className="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" onClick={() => setActiveLink('#about')} className={activeLink === '#about' ? 'nav__link active-link' : 'nav__link'}>
                                <i className="uil uil-user nav__icon"></i>About
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveLink('#skills')} className={activeLink === '#skills' ? 'nav__link active-link' : 'nav__link'}>
                                <i className="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#education" onClick={() => setActiveLink('#education')} className={activeLink === '#education' ? 'nav__link active-link' : 'nav__link'}>
                                <i className="uil uil-graduation-cap nav__icon"></i>Academics
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#projects" onClick={() => setActiveLink('#projects')} className={activeLink === '#projects' ? 'nav__link active-link' : 'nav__link'}>
                                <i className="uil uil-scenery nav__icon"></i>Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" onClick={() => setActiveLink('#contact')} className={activeLink === '#contact' ? 'nav__link active-link' : 'nav__link'}>
                                <i className="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav__close" onClick={() => showMenu(!toggle)}></i>
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header