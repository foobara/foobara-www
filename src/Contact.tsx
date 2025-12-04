import React from 'react'
import { Helmet } from 'react-helmet-async'
import './Contact.css'

function Contact () {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact Foobara - Get in Touch</title>
        <meta name="description" content="Have questions about Foobara? Need help or want to contribute? Join us on Discord, email us, or submit issues on GitHub." />
        <meta property="og:title" content="Contact Foobara - Get in Touch" />
        <meta property="og:description" content="Have questions about Foobara? Need help or want to contribute? Join us on Discord, email us, or submit issues on GitHub." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://foobara.org/contact/" />
        <meta property="og:image" content="https://foobara.org/images/pdcapy.jpg" />
        <meta property="og:image:alt" content="Foobara framework preview" />
        <link rel="canonical" href="https://foobara.org/contact/" />
      </Helmet>
      <h1 className="contact-header">Contact Us</h1>

      <div className="contact-card">
        <div className="contact-info">
          <h3>Get in Touch!</h3>
          <p>Have questions about Foobara?</p>
          <p>Need help building something with Foobara? We&apos;d love to help!</p>
          <p>Want to help build Foobara? There are fun tasks to do for all experience levels!
            We need art, documentation, code, help building a community... you name it we need it!</p>
        </div>
      </div>

      <div className="contact-card">
        <div className="contact-info">
          <h3>Let&apos;s chat Foobara!</h3>
          <div className="contact-links">
            <a
              href="https://discord.gg/dDpdFAeCHB"
              target="_blank"
              rel="noopener noreferrer"
            >
              Find us on Discord
            </a>
          </div>
        </div>
      </div>

      <div className="contact-card">
        <div className="contact-info">
          <h3>Email</h3>
          <p>miles@foobara.org</p>
        </div>

        <div className="contact-links">
          <a
            href="mailto:miles@foobara.org"
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
