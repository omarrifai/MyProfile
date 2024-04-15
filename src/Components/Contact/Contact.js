import React from 'react'
import './Contact.css'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className='Contact' id='contact'>
            <div className='ContactMe'>
                <h2>Contact Me</h2>
            </div>
            <div>
                <h3>Feel free to reach out to me for inquiries or collaborations.</h3>
            </div>
            <div className='ContactMe-Detail'>
                <div className="ContactMe-Detail-card">
                    <div className="card-border-top">
                        <FaMapMarkerAlt className='location-icon' />
                    </div>
                    <span> Address</span>
                    <p className="detail"> Lebanon, baalbeck-Hermel, Baalbeck</p>
                </div>

                <div className="ContactMe-Detail-card">
                    <div className="card-border-top">
                    <FaPhone className='phone-icon' />
                    </div>
                    <span> Phone Number</span>
                    <p className="detail">+96171800276</p>
                </div>

                <div className="ContactMe-Detail-card">
                    <div className="card-border-top">
                    <FaEnvelope className='email-icon' />
                    </div>
                    <span>Email</span>
                    <p className="detail">omar.rifai.966@gmail.com</p>
                </div>

                <div className="ContactMe-Detail-card">
                    <div className="card-border-top">
                    <FaLinkedin className='linkedin-icon' />
                    </div>
                    <span>LinkedIn</span>
                    <p className="detail"><a href='https://linkedin.com/in/omar-rifai-6314751a1/'>https://linkedin.com/in/omar-rifai-6314751a1/</a></p>
                </div>
            </div>
        </div>
    )
}

export default Contact