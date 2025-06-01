import React from 'react'
import './Contact.css'

function Community () {
  return (
    <div className="contact-container">
      <h1 className="contact-header">FoobArticles: The Foobara Blog</h1>

      <div className="contact-card">
        <div className="contact-info">
          <h3>Latest FoobArticle</h3>
          <div className="contact-links">
            <a
              href=
                "https://medium.com/@foobarticles/creating-an-ai-agent-with-the-foobara-agent-cli-ruby-gem-4f8e0280983f"
              target="_blank"
              rel="noopener noreferrer"
            >
              Creating an AI Agent with the Foobara Agent CLI
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Community
