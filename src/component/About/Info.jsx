import React from 'react'

function Info() {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="bx bx-award about__icon"></i>
        <h3 className="about__title">10+</h3>
        <span className="about__subtitle">Top Skills</span>
      </div>

      <div className="about__box">
        <i className="bx bx-file about__icon"></i>
        <h3 className="about__title">15+</h3>
        <span className="about__subtitle">Projects</span>
      </div>

      <div className="about__box">
        <i className="bx bx-trophy about__icon"></i>
        <h3 className="about__title">5+</h3>
        <span className="about__subtitle">Certifications</span>
      </div>
    </div>
  )
}

export default Info