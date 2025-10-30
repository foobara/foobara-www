import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { FaGithub, FaDiscord, FaYoutube } from 'react-icons/fa'
import { SiBluesky } from 'react-icons/si'

const activeClassName = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '')

const Header: React.FC = () => (
  <header className="header">
    <nav className="nav">
      <ul>
        <li>
          <NavLink
          to="/"
          end
          className={activeClassName}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
          to="/blog"
          end
          className={activeClassName}>
            FoobArticles
          </NavLink>
        </li>
        <li>
          <NavLink
          to="/videos"
          end
          className={activeClassName}>
            Videos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/docs"
            end
            className={activeClassName}>
            Docs
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            end
            className={activeClassName}>
            Contact
          </NavLink>
        </li>
        <li className="header-icon">
          <a href="https://bsky.app/profile/foob.news" target="_blank" rel="noopener noreferrer">
            {SiBluesky({ size: 24 })}
          </a>
        </li>
        <li className="header-icon">
          <a href="https://discord.gg/dDpdFAeCHB" target="_blank" rel="noopener noreferrer">
            {FaDiscord({ size: 24 })}
          </a>
        </li>
        <li className="header-icon">
          <a href="http://youtube.com/@FoobaraFlix" target="_blank" rel="noopener noreferrer">
            {FaYoutube({ size: 24 })}
          </a>
        </li>
        <li className="header-icon">
          <a href="http://github.com/foobara/foobara" target="_blank" rel="noopener noreferrer">
            {FaGithub({ size: 24 })}
          </a>
        </li>
      </ul>
    </nav>
  </header>
)
export default Header
