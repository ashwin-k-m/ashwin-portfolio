import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import Soft from './Soft'
import Other from './Other'
function Skills() {
  return (
    <section className="skills section" id='skills'>
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">My Tech Stack</span>
        <div className="skills__container container grid">
            <Frontend/>
            <Backend/>
            <Soft/>
            <Other/>
        </div>
    </section>
  )
}

export default Skills