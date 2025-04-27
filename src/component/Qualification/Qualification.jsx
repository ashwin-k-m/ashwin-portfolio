import React from 'react'
import './qualification.css'

function Qualification() {
    return (
        <section className="qualification section" id='education'>
            <h2 className="section__title">Education</h2>
            <span className="section__subtitle">My personal journey</span>
            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div className="qualification__button qualification__active button--flex">
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Academic Journey
                    </div>
                    <div className="qualification__button button--flex">
                        <i className="bx bx-note qualification__icon"></i>
                        Certificates
                    </div>
                </div>
            </div>
            <div className="qualification__sections">
                <div className="qualification__content qualification__content-active">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Bachelor of Computer Applications</h3>
                            <span className="qualification__subtitle">Mangalore University</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2021 - 2024
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

                <div className="qualification__content">
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Higher Secondary - Computer Science</h3>
                            <span className="qualification__subtitle">Jawahar Navodaya Vidyalaya</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2019 - 2021
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

                <div className="qualification__content">
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">High School</h3>
                            <span className="qualification__subtitle">Jawahar Navodaya Vidyalaya</span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2016 - 2019
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="qualification__sections">
                <div className="qualification__content qualification__content-active">
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">React JS for Beginners</h3>
                            <span className="qualification__subtitle"><a href="">Simplilearn</a></span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2024
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

                <div className="qualification__content">
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Getting Started with Node JS</h3>
                            <span className="qualification__subtitle"><a href="">Simplilearn</a></span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2024
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

                <div className="qualification__content">
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Introduction to Express JS</h3>
                            <span className="qualification__subtitle"><a href="">Simplilearn</a></span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2025
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                </div>

                <div className="qualification__content">
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Introduction to MongoDB</h3>
                            <span className="qualification__subtitle"><a href="">Simplilearn</a></span>
                            <div className="qualification__calendar">
                                <i className="uil uil-calendar-alt"></i> 2025
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Qualification