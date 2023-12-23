import React from 'react'
import "../css/Contact.css"
import Email from "../assets/email.png"
import Linkdin from "../assets/linkedin.png"


export default function () {

    return (
        <section id="contact" data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0">
            <p class="section-text-p1">Get in Touch</p>
            <h1 class="title">Contact Me</h1>
            <div class="contact-info-upper-container">
                <div class="contact-info-container">
                    <img
                        src={Email}
                        alt="Email icon"
                        class="icon contact-icon email-icon"
                    />
                    <p><a href="mailto:examplemail@gmail.com">biplabskr25@gmail.com</a></p>
                </div>
                <div class="contact-info-container">
                    <img
                        src={Linkdin}
                        alt="LinkedIn icon"
                        class="icon contact-icon"
                    />
                    <p><a href="https://www.linkedin.com">LinkedIn</a></p>
                </div>
            </div>
        </section>
    )
}
