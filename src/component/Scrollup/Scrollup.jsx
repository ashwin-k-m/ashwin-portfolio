import React from 'react'
import './scrollup.css'

function Scrollup() {
    window.addEventListener('scroll', function () {
        const scroll_up = document.querySelector('.scrollup')
        if (this.scrollY >= 560) scroll_up.classList.add('show-scroll')
        else scroll_up.classList.remove('show-scroll')
    })
    return (
        <a href="#" className="scrollup"><i className="uil uil-arrow-up scrollup__icon"></i></a>
    )
}

export default Scrollup