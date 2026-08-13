import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact">

      <div className="contact-header">
        <h1>Contact Us</h1>

        <p>
          Have a question about our project?
        </p>
      </div>


      <div className="contact-content">

        <div className="info">
          <h2>Project Details</h2>

          <p>Urine Test Strip Reader</p>
          <p>K. J. Somaiya Hospital and Research Center</p>
          <p>Mumbai, Maharashtra</p>
        </div>


        <div className="form">

          <h2>Send a Message</h2>

          <input type="text" placeholder="Your Name" />

          <input type="email" placeholder="Your Email" />

          <textarea placeholder="Your Message"></textarea>

          <button>Send Message</button>

        </div>

      </div>

    </div>
  );
}

export default Contact;