import React from 'react';
import '../App.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>We love to hear from you! Please contact us with any questions or feedback.</p>

      <div className="contact-details">
        <h2>Get in Touch</h2>
        <p><strong>Customer Service Hours:</strong><br />Monday - Friday: 9:00am - 5:00pm</p>

        <p><strong>Email: </strong><a href="mailto:ananyaag06@gmail.com">ananyaag06@gmail.com</a></p>

        <p><strong>Phone Number: </strong><a href="tel:+916396911613">+916396911613</a></p>

        <p><strong>Mailing Address: </strong>
          Budhbazar, Moradabad, UP, 244001
        </p>
      </div>

      <div className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" required></textarea>

          <br/><br/>

          <button type="submit" className='btn'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;