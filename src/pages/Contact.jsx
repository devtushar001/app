// ContactPage.js
import React, { useState } from 'react';
import './Styles/Contact.css'; // Styling for the Contact Page

const Contact = () => {
  // State for the form fields and error messages
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !message) {
      setErrorMessage('Please fill out all fields.');
      setSuccessMessage('');
      return;
    }

    // If validation is successful, show a success message (You can replace this with API call)
    setSuccessMessage('Your message has been sent successfully!');
    setErrorMessage('');
    
    // Reset form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="contact-form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            required
          />
        </div>

        <div className="contact-form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your Email"
            required
          />
        </div>

        <div className="contact-form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            required
          ></textarea>
        </div>

        {errorMessage && <div className="contact-error">{errorMessage}</div>}
        {successMessage && <div className="contact-success">{successMessage}</div>}

        <button type="submit" className="contact-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
