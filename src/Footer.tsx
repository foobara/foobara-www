import React from 'react'
import './Footer.css'
import { FaGithub, FaDiscord } from 'react-icons/fa'
import { SiBluesky } from 'react-icons/si'

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="footer-icons">
      <a href="http://github.com/foobara/foobara/issues" target="_blank" rel="noopener noreferrer">
        {FaGithub({ size: 30 })}
      </a>
      <a href="https://discord.gg/dDpdFAeCHB" target="_blank" rel="noopener noreferrer">
        {FaDiscord({ size: 30 })}
      </a>
      <a href="https://bsky.app/profile/foob.news" target="_blank" rel="noopener noreferrer">
        {SiBluesky({ size: 30 })}
      </a>
    </div>
  </footer>
)

export default Footer
