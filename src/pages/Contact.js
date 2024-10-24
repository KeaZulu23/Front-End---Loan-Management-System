// src/pages/Contact.js
import React from "react";
import './Contact.css'; // Importing the CSS for styling

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>If you have any questions or need assistance, feel free to reach out to us using the form below or through our contact information.</p>

      {/* Contact Information */}
      <div className="contact-info">
        <h2>Our Contact Information</h2>
        <p><strong>Email:</strong> support@lubanziy.com</p>
        <p><strong>Phone:</strong> +27 12 345 6789</p>
        <p><strong>Address:</strong> 123 Main Street, Johannesburg, South Africa</p>
      </div>

      {/* Contact Form */}
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="4" required></textarea>
        </div>
        <button type="submit" className="btn-primary">Send Message</button>
      </form>

      {/* Map Section */}
      <div className="map-container">
        <h2>Our Location</h2>
        <iframe
          title="Location Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4241.600968585192!2d28.044045076056634!3d-26.205629977075635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950e997254b76f%3A0xcb23235a28364c91!2s123%20Main%20St%2C%20Marshalltown%2C%20Johannesburg%2C%202107!5e1!3m2!1sen!2sza!4v1729765993749!5m2!1sen!2sza"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
