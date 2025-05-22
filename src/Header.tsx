import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

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
            to="/contact"
            end
            className={activeClassName}>
            Contact
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
          <a
            href="http://github.com/foobara/foobara"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
      </ul>
    </nav>
  </header>
)
export default Header
