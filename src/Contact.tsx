import React from 'react'
import './Contact.css'

function Contact () {
  return (
    <div className="contact-container">
      <h1 className="contact-header">Contact Us</h1>

      <div className="contact-card">
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>Need help building something with Foobara? We&apos;d love to help!</p>
          <p>Want to help build Foobara? There are fun tasks to do for all experience levels!
            We need art, documentation, code, help building a community... you name it we need it!</p>
        </div>

        <div className="contact-info">
          <h3>Email</h3>
          <p>miles@foobara.com</p>
        </div>

        <div className="contact-links">
          <a
            href="http://github.com/foobara/foobara"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
          <a
            href="mailto:miles@foobara.com"
            className="secondary"
          >
            Email us!
          </a>
        </div>
      </div>

      <div className="contact-card">
        <div className="contact-info">
          <h3>Report Issues</h3>
          <p>
            Found a bug or have a feature request? Please submit an issue on our GitHub repository.
          </p>
        </div>

        <div className="contact-links">
          <a
            href="http://github.com/foobara/foobara/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            Submit an Issue
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
