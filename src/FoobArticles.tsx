import React from 'react'
import { Helmet } from 'react-helmet-async'
import './Contact.css'

function Community () {
  return (
    <div className="contact-container">
      <Helmet>
        <title>FoobArticles - The Foobara Blog</title>
        <meta name="description" content="Latest articles about topics such as Ruby and Foobara." />
        <meta property="og:title" content="FoobArticles - The Foobara Blog" />
        <meta property="og:description" content="Latest articles about topics such as Ruby and Foobara." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://foobara.org/blog/" />
        <meta property="og:image" content="https://foobara.org/images/pdcapy.jpg" />
        <meta property="og:image:alt" content="Foobara framework preview" />
        <link rel="canonical" href="https://foobara.org/blog/" />
      </Helmet>
      <h1 className="contact-header">FoobArticles: The Foobara Blog</h1>

      <div className="contact-card">
        <div className="contact-info">
          <h3>&nbsp;</h3>
          <div className="contact-links">
            <a
              href=
                "https://miles.georgi.foo/quickly-add-foobara-to-an-existing-rails-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              How to Quickly Add Foobara as a Service-Object Layer to an Existing Rails App
            </a>
            <a
              href=
                "https://dev.to/foobara/writing-an-ai-agent-in-1-line-of-ruby-code-using-foobaras-agentbackedcommand-m6p"
              target="_blank"
              rel="noopener noreferrer"
            >
              Writing an AI Agent in 1 Line of Ruby Code Using Foobara::AgentBackedCommand
            </a>
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
