import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import './Home.css'

function Home () {
  return (
    <div className="Home">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Foobara</h1>
          <h2>Command-centric Framework for Complex Domains</h2>
          <p className="hero-description">
            Foobara helps you encapsulate high-level domain operations in commands and automatically
            expose machine-readable formal metadata about those commands so that integration code
            can be decoupled and abstracted away.  Write your domain logic once and automatically use it
            via CLI, HTTP, MCP, in AI agents, in async job queues, whatever integration you can think of!
          </p>
          <div className="hero-cta">
            <a className="cta-button" href="http://github.com/foobara/foobara">GitHub</a>

            <a
              href="https://youtu.be/SSOmQqjNSVY"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button secondary"
            >
              Watch Introduction
            </a>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Core Features & Concepts</h2>

        <div className="feature-group">
          <div className="feature">
            <h3>Command-centric</h3>
            <ul>
              <li>Encapsulate high-level domain operations</li>
              <li>Serve as the public interface to your systems</li>
              <li>Organize into Organizations and Domains</li>
            </ul>
          </div>

          <div className="feature">
            <h3>Discoverability</h3>
            <ul>
              <li>Formal, machine-readable description of systems</li>
              <li>Abstract away integration code</li>
              <li>Enable tooling and automation</li>
            </ul>
          </div>

          <div className="feature">
            <h3>Domain Complexity Management</h3>
            <ul>
              <li>Better communicate mental models</li>
              <li>Avoid coupling domain logic to integration logic</li>
              <li>Focus on domain problems, not infrastructure</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2>Why Choose Foobara?</h2>
        <div className="benefits-list">
          <div className="benefit-item">
            <h3>Domain Focus</h3>
            <p>Engineers spend more time writing code relevant to the domain and less time on tech-stack or architecture decisions.</p>
          </div>

          <div className="benefit-item">
            <h3>Clear Mental Models</h3>
            <p>Operate within a specific mental model at a time instead of juggling multiple contexts.</p>
          </div>

          <div className="benefit-item">
            <h3>Flexible Architecture</h3>
            <p>Rearchitect systems without changing interfaces, reducing refactoring and testing requirements.</p>
          </div>
        </div>
      </section>

      <section className="tools-section">
        <h2>Powerful Tools</h2>
        <div className="tools-list">
          <div className="tool-item">
            <h3>Remote Commands</h3>
            <p>Call commands across system boundaries with the same interface as local commands.</p>
          </div>

          <div className="tool-item">
            <h3>Domain Mappers</h3>
            <p>Map concepts between domains to maintain separation of concerns.</p>
          </div>

          <div className="tool-item">
            <h3>Code Generators</h3>
            <p>Generate Ruby and TypeScript/React projects with a single command.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <div className="cta-buttons">
          <a className="cta-button" href="http://github.com/foobara/foobara">GitHub</a>
          <Link to="/videos" className="cta-button secondary">Watch Videos</Link>
        </div>
      </section>
    </div>
  )
}

export default Home
