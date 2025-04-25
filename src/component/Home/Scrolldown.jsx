import React from 'react'

function Scrolldown() {
    return (
        <div className="home__scroll">
            <a href="#about" className="home__scroll-button button--flex">
                <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                <span className="home__scroll-name">Scroll Down</span>
                <i className="uil uil-arrow-down home__scroll-arrow"></i>
            </a>
        </div>
    )
}

export default Scrolldown