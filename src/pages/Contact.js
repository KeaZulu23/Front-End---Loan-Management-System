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
        <p><strong>Email:</strong> zandile@lubanziy.co.za | info@lubanziy.co.za</p>
        <p><strong>Phone:</strong> +27 65 931 9530</p>
        <p><strong>Address:</strong> 27 Olienhotkoppie, Arboretum, Richards Bay, Kwa-Zulu Natal, 3900 </p>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4144.0874679476265!2d32.06435777613251!3d-28.766500375591818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1efa237160e37559%3A0x51e22f89ea31fed8!2s27%20Olienhoutkoppie%2C%20Arboretum%2C%20Richards%20Bay%2C%203900!5e1!3m2!1sen!2sza!4v1729782819181!5m2!1sen!2sza"
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
