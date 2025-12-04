import React from 'react'
import './HelpFoobara.css'

function HelpFoobara () {
  return (
    <div className="help-container">
      <h1 className="help-header">Help Foobara!</h1>

      <div className="help-card">
        <div className="help-info">
          <h3>Interested in Making Code Contributions to an Open-Source Project?</h3>
          <p>
            Want to help build Foobara while gaining experience with developer tools?
          </p>
          <p>
            We have a collection of &quot;good first issue&quot; tasks perfect for newcomers,
            including Ruby/TypeScript newcomers!. These issues are
            great opportunities to learn, contribute, and grow your skills!
            If you need help or get stuck please reach out by email or on Discord!
          </p>
        </div>

        <div className="help-links">
          <a
            href="https://github.com/search?q=state%3Aopen+org%3Afoobara+label%3A%22good+first+issue%22&type=issues&ref=advsearch"
            target="_blank"
            rel="noopener noreferrer"
          >
            Browse Good First Issues on GitHub!
          </a>
        </div>
      </div>

      <div className="help-card">
        <div className="help-info">
          <h3>Other Ways to Help</h3>
          <p>
            Using Foobara and filing GitHub issues to report bugs or usability issues would be super helpful!
          </p>
          <p>
            We also need help with art, documentation/tutorials, and community-building!
          </p>
          <p>
            If you&apos;re interested in contributing in these areas, please reach out by email or on Discord.
            We&apos;d love to hear from you!
          </p>
        </div>

        <div className="help-links">
          <a
            href="mailto:miles@foobara.org"
          >
            Email us
          </a>
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
  )
}

export default HelpFoobara
