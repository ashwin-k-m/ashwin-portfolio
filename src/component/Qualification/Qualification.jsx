import React, { useState } from 'react';
import './qualification.css';

function Qualification() {
    const [activeTab, setActiveTab] = useState(0);

    const toggleTab = (index) => {
        setActiveTab(index);
    };

    return (
        <section className="qualification section" id="education">
            <h2 className="section__title">Academics</h2>
            <span className="section__subtitle">My personal journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div
                        className={activeTab === 0 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(0)}>
                        <i className="uil uil-graduation-cap qualification__icon"></i>
                        Education
                    </div>
                    <div
                        className={activeTab === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"}
                        onClick={() => toggleTab(1)}>
                        <i className="bx bx-note qualification__icon"></i>
                        Certificates
                    </div>
                </div>

                <div className="qualification__sections">
                    {/* Academic Journey Section */}
                    <div className={activeTab === 0 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {/* Academic Journey Data */}
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
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">High School</h3>
                                <span className="qualification__subtitle">Jawahar Navodaya Vidyalaya</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2016 - 2019
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>
                    </div>

                    {/* Certificates Section */}
                    <div className={activeTab === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {/* Certificates Data */}
                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">React JS for Beginners</h3>
                                <span className="qualification__subtitle"><a href="#">Simplilearn</a></span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2024
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Getting Started with Node JS</h3>
                                <span className="qualification__subtitle"><a href="#">Simplilearn</a></span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2024
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Introduction to Express JS</h3>
                                <span className="qualification__subtitle"><a href="#">Simplilearn</a></span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2025
                                </div>
                            </div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>
                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                            <div>
                                <h3 className="qualification__title">Introduction to MongoDB</h3>
                                <span className="qualification__subtitle"><a href="#">Simplilearn</a></span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2025
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Qualification;
