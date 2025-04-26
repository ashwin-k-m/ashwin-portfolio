import React from 'react'
import "./about.css"
import CV from "../../assets/cv.pdf"
import Info from './Info'
import Emo from './Emo'

function About() {
  return (
    <section className="about section" id='about'>
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>
      <div className="about__container container grid">
        <div className="about__img">
          <Emo />
        </div>

        <div className="about__data">
          <Info />
          <p className="about__description">I'm a Full Stack Developer with a passion for creating beautiful and functional web applications. I have experience in HTML, CSS, JavaScript, React JS, Express JS, MongoDB and more. I'm always eager to learn new technologies and improve my skills.</p>
          <a href={CV} download="" className="button button--flex">Download CV<img width="24" height="24" src="https://img.icons8.com/fluency/48/download.png" alt="download" /></a>
        </div>
      </div>
    </section>
  )
}

export default About