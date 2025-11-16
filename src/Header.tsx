import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
import { FaGithub, FaDiscord, FaYoutube, FaBars, FaTimes } from 'react-icons/fa'
import { SiBluesky } from 'react-icons/si'

const activeClassName = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '')

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    if (isMenuOpen) {
      const scrollY = window.scrollY
      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = '100%'
    } else {
      const scrollY = document.body.style.top
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, parseInt(scrollY ?? '0') * -1)
    }
    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <nav className="nav">
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? FaTimes({ size: 24 }) : FaBars({ size: 24 })}
        </button>
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <NavLink
            to="/"
            end
            onClick={closeMenu}
            className={activeClassName}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
            to="/blog"
            end
            onClick={closeMenu}
            className={activeClassName}>
              FoobArticles
            </NavLink>
          </li>
          <li>
            <NavLink
            to="/videos"
            end
            onClick={closeMenu}
            className={activeClassName}>
              Videos
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/docs"
              end
              onClick={closeMenu}
              className={activeClassName}>
              Docs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/help-foobara"
              end
              onClick={closeMenu}
              className={activeClassName}>
              Help Foobara!
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              end
              onClick={closeMenu}
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
}
export default Header
