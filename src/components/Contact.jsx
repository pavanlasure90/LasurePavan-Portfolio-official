import React from 'react';
import Info from './Info';
import Navbar from './navbar';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <Info />
      <section className="contact" id="contact">
        <div className="max-width">
          <div className="contact-content">
            <form method='POST' action='https://formspree.io/f/xdoregjo' className="contact-form">
              <div className='pb-8'>
                <h1>Contact</h1>
                <h2>Contact Form</h2>
              </div>
              <input type="text" placeholder='Name' name='name' />
              <input type="email" placeholder='Email' name='email' />
              <textarea name="message" rows="8" placeholder='Message'></textarea>
              <button className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      <Navbar />
    </>
  );
};

export default Contact;
