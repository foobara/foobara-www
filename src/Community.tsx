import React from 'react'
import './Contact.css'

function Community () {
  return (
    <div className="contact-container">
      <h1 className="contact-header">Join the Community</h1>

      <div className="contact-card">
        <div className="contact-info">
          <h3>Let&apos;s chat Foobara!</h3>
          <p>Have questions about Foobara?</p>
          <p>Want help building something with Foobara? We&apos;d love to help!</p>
          <p>Want to help build Foobara? There are fun tasks to do for all experience levels!
            We need art, documentation, code, help building a community... you name it we need it!</p>
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
    </div>
  )
}

export default Community
