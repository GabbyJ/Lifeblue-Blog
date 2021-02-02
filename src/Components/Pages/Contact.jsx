import React from 'react'

export default function Contact() {
    return (
        <div className="dummy contact">
            <h1>Contact</h1>
            <div className="info">
                <p><strong>Name:</strong> Gabrielle Jacobs</p>
                <p><strong>Email:</strong> <a href ="mailto:GMJacobsDev@gmail.com">GMJacobsDev@gmail.com</a></p>
                <p><strong>Location:</strong> Dallas, TX</p>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52399.19806815211!2d-96.8666726775992!3d33.01180175202814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c23c1dcf10917%3A0x6ada71f06dc85173!2sDallas%2C%20TX%2075287!5e0!3m2!1sen!2sus!4v1612270202847!5m2!1sen!2sus" width="600" height="450" frameborder="0" title="map" styleName="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
    )
}
