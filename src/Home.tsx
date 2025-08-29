import React from 'react'
import './App.css'
import './Home.css'

function Home () {
  return (
    <div className="Home">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Foobara</h1>
          <h2>A Command-Centric Framework for Complex Domains!</h2>
          <p className="hero-description">
            Foobara helps you encapsulate high-level domain operations in commands and automatically
            expose machine-readable formal metadata about those commands. This allows integration code
            can be decoupled and abstracted away. So you can write your domain logic once and automatically use it
            via CLI, HTTP, MCP, in AI agents, in async job queues...
            whatever integration you can think of or even haven&apos;t thought of yet!
          </p>
        </div>
      </section>

      <section className="features-section">
        <h2>Core Features & Concepts</h2>

        <div className="feature-group">
          <div className="feature">
            <h3>Command-centric</h3>
            <ul>
              <li>Encapsulate high-level domain operations</li>
              <li>Commands serve as the public interface to your domains</li>
            </ul>
          </div>

          <div className="operator">+</div>

          <div className="feature">
            <h3>Discoverability</h3>
            <ul>
              <li>Formal, machine-readable description of systems</li>
              <li>Abstract away integration code</li>
              <li>Enable tooling and automation</li>
            </ul>
          </div>

          <div className="operator">=</div>

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

      <section className="diagram-section">
        <div className="diagram-container">
          <img
            src="/cc_plus_discoverable.jpg"
            alt="Diagram showing how Foobara combines command-centric approach with discoverability"
            className="diagram-image"
          />
        </div>
      </section>

      <section className="benefits-section">
        <h2>Why Foobara?</h2>
        <div className="benefits-list">
          <div className="benefit-item">
            <h3>Domain Focus</h3>
            <p>Engineers spend more time writing code relevant to the domain and less time on tech-stack or architecture decisions.</p>
          </div>

          <div className="benefit-item">
            <h3>Clearer Mental Models</h3>
            <p>Commands the public interfaces and have domain-specific names and implementation, helping with
            communication and understanding across teams.</p>
          </div>

          <div className="benefit-item">
            <h3>Flexible Architecture</h3>
            <p>Rearchitect systems without changing interfaces, reducing refactoring and testing requirements.</p>
          </div>
        </div>
      </section>

      <section className="tools-section">
        <h2>Helpful Abstractions</h2>
        <div className="tools-list">
          <div className="tool-item">
            <h3>Commands</h3>
            <p>The champion of Foobara! Encapsulate high-level domain operations and expose them in new ways
              without refactoring your precious domain logic.</p>
          </div>

          <div className="tool-item">
            <h3>Models & Entities</h3>
            <p>Define discoverable domain models and entities with persistence and transaction support.</p>
          </div>

          <div className="tool-item">
            <h3>Organizations & Domains</h3>
            <p>Organize commands, types, and errors into Domains and Organizations.</p>
          </div>

          <div className="tool-item">
            <h3>Remote Commands</h3>
            <p>Call commands in Typescript or Ruby across system boundaries with the same interface as local Ruby commands.</p>
          </div>

          <div className="tool-item">
            <h3>Domain Mappers</h3>
            <p>Map concepts between domains to allow commands to focus on one domain.</p>
          </div>

          <div className="tool-item">
            <h3>Custom Types</h3>
            <p>Create custom data types that other tools and systems can discover.</p>
          </div>

          <div className="tool-item">
            <h3>Command Connectors</h3>
            <p>Integrate commands via CLI, HTTP, MCP, async job queues, and whatever else pops up without changing your domain logic or refactoring your code.</p>
          </div>

          <div className="tool-item">
            <h3>CRUD Drivers</h3>
            <p>Store entity records with a consistent interface across multiple data stores.</p>
          </div>

          <div className="tool-item">
            <h3>Code Generators</h3>
            <p>Generate various Foobara components, and even Ruby and Typescript/React projects from foobara manifest metadata</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <div className="cta-buttons">
          <a className="cta-button" href="http://github.com/foobara/foobara">GitHub</a>
          <a
            href="https://youtu.be/SSOmQqjNSVY"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button secondary"
          >
            Watch an Intro Video
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
