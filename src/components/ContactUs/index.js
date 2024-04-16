import React from 'react';
import './index.css'


export default function ContactUs() {
  return (
    <div className="contact-card">
      <h2 className="contact-title">Contact Us</h2>
      <p className="contact-description">Feel free to reach out to us for any queries or feedback!</p>
      
      <a href="mailto:subhashchi@gmail.com" className="contact-button" >Email Us</a>
    </div>
  );
}
