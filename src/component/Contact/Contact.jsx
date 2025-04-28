import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_0mvuhzl', 'template_u6sr4ur', form.current, {
                publicKey: 'uJxLEqrNXdpjCSt-z',
            })
        e.target.reset()
    };
    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Contact</h2>
            <span className="section__subtitle">Get in touch</span>
            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>
                    <div className="contact__info">
                        <div className="contact__card">
                            <i className="uil uil-envelope contact__card-icon"></i>
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">ashwinmullachery@gmail.com</span>
                            <a href="mailto:ashwinmullachery@gmail.com" className="contact__button" target="_blank">Write me <i className="uil uil-arrow-right contact__button-icon"></i></a>
                        </div>
                        <div className="contact__card">
                            <i className="uil uil-phone contact__card-icon"></i>
                            <h3 className="contact__card-title">Phone</h3>
                            <span className="contact__card-data">+91 9207362709</span>
                            <a href="https://wa.me/+919207362709" className="contact__button" target="_blank">Text me <i className="uil uil-arrow-right contact__button-icon"></i></a>
                        </div>
                        <div className="contact__card">
                            <i className="uil uil-map-marker contact__card-icon"></i>
                            <h3 className="contact__card-title">Location</h3>
                            <span className="contact__card-data">Kasaragod, Kerala, India</span>
                            <a href="https://www.google.com/maps/dir//12.4995966,74.9869276" className="contact__button" target="_blank">Find me <i className="uil uil-arrow-right contact__button-icon"></i></a>
                        </div>
                    </div>
                </div>
                <div className="contact__content">
                    <h3 className="contact__title">Leave me a Message</h3>
                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className='contact__form-tag'>Name</label>
                            <input type="text" name='name' className="contact__form-input" placeholder=" Enter your Name" />
                        </div>
                        <div className="contact__form-div">
                            <label className='contact__form-tag'>Email</label>
                            <input type="email" name='email' className="contact__form-input" placeholder=" Enter your Email" />
                        </div>
                        <div className="contact__form-div contact__form-area">
                            <label className='contact__form-tag'>Message</label>
                            <textarea name="message" id="" cols="30" rows="10" className="contact__form-input contact__form-area" placeholder='Add a Message'></textarea>
                        </div>
                        <button className="button button--flex">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact