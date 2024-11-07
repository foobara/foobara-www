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
          to="/docs"
          end
          className={activeClassName}>
            Docs
          </NavLink>
                  </li>
        <li>
          <a href="http://github.com/foobara/foobara">GitHub</a>
        </li>
      </ul>
    </nav>
  </header>
)
export default Header
