import React from 'react'
import './footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Ashwin</h1>
                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                    <li>
                        <a href="#projects" className="footer__link">Projects</a>
                    </li>
                </ul>
                <div className="footer__social">
                    <a href="https://www.linkedin.com/in/ashwin-kumar-m-a62bb22b2/" target="_blank" className="footer__social-link"><i className="uil uil-linkedin"></i></a>
                    <a href="https://www.facebook.com/ashwin.kumarm.520" target="_blank" className="footer__social-link"><i className="uil uil-facebook"></i></a>
                    <a href="https://wa.me/+919207362709" className="footer__social-link"><i className="uil uil-whatsapp"></i></a>
                </div>
                <span className="footer__copy">&#169; Ashwin. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer