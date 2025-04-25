import React from 'react'

function Backend() {
    return (
        <div className="skills__content">
            <h3 className="skills__title">Back-End Skills</h3>
            <div className="skills__box">
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bxl-nodejs"></i>
                        <div>
                            <h3 className="skills__name">Node JS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxs-file-js"></i>
                        <div>
                            <h3 className="skills__name">ExpressJS</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxl-mongodb"></i>
                        <div>
                            <h3 className="skills__name">MongoDB</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>
                </div>
                <div className="skills__group">
                    <div className="skills__data">
                        <i className="bx bxl-javascript"></i>
                        <div>
                            <h3 className="skills__name">JavaScript</h3>
                            <span className="skills__level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxl-firebase"></i>
                        <div>
                            <h3 className="skills__name">FireBase</h3>
                            <span className="skills__level">Beginner</span>
                        </div>
                    </div>

                    <div className="skills__data">
                        <i className="bx bxl-php"></i>
                        <div>
                            <h3 className="skills__name">Php</h3>
                            <span className="skills__level">Beginner</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Backend