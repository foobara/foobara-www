import React from 'react'
import { Helmet } from 'react-helmet-async'
import './App.css'
import './Home.css'

import SimpleCommandCodeDemo from './Home/SimpleCommandCodeDemo'
import ConnectorsDemos from './Home/Connectors/ConnectorsDemos'
import GeneratorsDemo from './Home/Generators/GeneratorsDemo'

function Home () {
  return (
    <div className="Home">
      <Helmet>
        <title>Foobara - Write Once, Connect Everywhere | Ruby Framework</title>
        <meta name="description" content="Stop rewriting integration code. Write your domain logic once as Foobara commands and instantly connect to CLI, HTTP, MCP, AI agents, and more. Free Ruby/TypeScript SDKs included." />
        <meta property="og:title" content="Foobara - Write Once, Connect Everywhere | Ruby Framework" />
        <meta property="og:description" content="Stop rewriting integration code. Write your domain logic once as Foobara commands and instantly connect to CLI, HTTP, MCP, AI agents, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://foobara.org/" />
        <meta property="og:image" content="https://foobara.org/images/pdcapy.jpg" />
        <meta property="og:image:alt" content="Foobara framework preview" />
        <link rel="canonical" href="https://foobara.org/" />
      </Helmet>
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-hook">Tired of rewriting the same integration code for every new interface?</p>
          <h1>Write Once. Connect Everywhere.</h1>
          <h2>The Ruby framework that lets you focus on your domain logic, not integration boilerplate.</h2>
          <div className="hero-cta">
            <a href="/docs" className="cta-button">Get Started</a>
            <a href="https://github.com/foobara/foobara" target="_blank" rel="noopener noreferrer" className="cta-button secondary">View on GitHub</a>
          </div>
        </div>
      </section>

      <section className="hero-explanation">
        <p>
          Write your domain logic as <strong>Foobara commands</strong> and instantly connect them
          to <strong>CLI</strong>, <strong>HTTP APIs</strong>, <strong>MCP</strong>, <strong>AI agents</strong>, <strong>background jobs</strong>, and more.
          Get <strong>free Ruby and TypeScript SDKs</strong> with zero extra work.
          Your code stays clean. Your integrations stay consistent. Your future stays flexible.
        </p>
      </section>

      <section className="example-section">
        <SimpleCommandCodeDemo/>
      </section>

      <section className="example-section">
        <ConnectorsDemos/>
      </section>

      <section className="example-section generators-section">
        <h2>Code Generators!</h2>
        <GeneratorsDemo/>
      </section>

      <section className="diagram-section">
        <div className="diagram-container">
          <img
            src="images/cc_plus_discoverable2.jpg"
            alt="Diagram showing how Foobara combines command-centric approach with discoverability"
            className="diagram-image"
          />
        </div>
      </section>

      <section className="features-section">
        <div className="feature-group">
          <div className="feature">
            <h3>Command-centric</h3>
            <ul>
              <li>Domain operations are encapsulated and composable</li>
              <li>Commands serve as the public interface to your domains</li>
            </ul>
          </div>

          <div className="operator">+</div>

          <div className="feature">
            <h3>Discoverability</h3>
            <ul>
              <li>Formal, machine-readable description of systems</li>
              <li>Used to abstract away integration code</li>
              <li>Enables tooling and automation</li>
            </ul>
          </div>

          <div className="operator">=</div>

          <div className="feature">
            <h3>Foobara</h3>
            <ul>
              <li>Better communicates mental models</li>
              <li>Avoids coupling domain logic to integration logic</li>
              <li>Focuses on the domain problem, not integration</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="benefits-section">
        <h2>Why Developers Choose Foobara</h2>
        <div className="benefits-list">
          <div className="benefit-item">
            <h3>Ship Faster</h3>
            <p>Stop writing glue code. Your domain logic works with CLI, HTTP, websockets, and AI agents out of the box. Add new integrations in minutes, not days.</p>
          </div>

          <div className="benefit-item">
            <h3>Code That Communicates</h3>
            <p>Commands are self-describing. New team members understand your system faster. Your domain logic becomes living documentation.</p>
          </div>

          <div className="benefit-item">
            <h3>Future-Proof Your Code</h3>
            <p>New integration needed? New technology trend? Your domain logic stays untouched. Foobara handles the connection.</p>
          </div>
        </div>
      </section>

      <section className="tools-section">
        <h2>Everything You Need to Build</h2>
        <div className="tools-list">
          <div className="tool-item">
            <h3>Commands</h3>
            <p>Your domain operations, encapsulated and reusable. Write a command once, expose it everywhere: CLI, HTTP, AI agents, job queues.</p>
          </div>

          <div className="tool-item">
            <h3>Models & Entities</h3>
            <p>Define your data structures with built-in persistence and transactions. Works with PostgreSQL, Redis, or local files.</p>
          </div>

          <div className="tool-item">
            <h3>Organizations & Domains</h3>
            <p>Group your commands, types, and errors logically. Keep large codebases organized and maintainable.</p>
          </div>

          <div className="tool-item">
            <h3>Remote Commands</h3>
            <p>Call commands across services in Ruby or TypeScript. Same interface whether local or remote.</p>
          </div>

          <div className="tool-item">
            <h3>Domain Mappers</h3>
            <p>Connect different domains cleanly. Let each command focus on its own domain without coupling.</p>
          </div>

          <div className="tool-item">
            <h3>Custom Types</h3>
            <p>Create domain-specific data types that are automatically discoverable by tooling and other systems.</p>
          </div>

          <div className="tool-item">
            <h3>Command Connectors</h3>
            <p>The magic layer. Connects your commands to CLI, HTTP, MCP, Resque, Rails, and more. Zero refactoring required.</p>
          </div>

          <div className="tool-item">
            <h3>CRUD Drivers</h3>
            <p>Swap databases without changing code. PostgreSQL today, Redis tomorrow. Same interface everywhere.</p>
          </div>

          <div className="tool-item">
            <h3>Code Generators</h3>
            <p>Generate Ruby and TypeScript projects, domains, commands, and types from your existing Foobara code.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Build Something?</h2>
        <p className="cta-tagline">Your first Foobara command is just a few minutes away.</p>
        <div className="cta-buttons">
          <a href="/docs" className="cta-button">Get Started</a>
          <a
            href="https://youtu.be/SSOmQqjNSVY"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button secondary"
          >
            Watch Intro Video
          </a>
        </div>
      </section>

      <section className="community-section">
        <h2>Join the Community</h2>
        <div className="community-links">
          <a href="https://discord.gg/dDpdFAeCHB" target="_blank" rel="noopener noreferrer" className="community-link">
            Discord
          </a>
          <a href="https://github.com/foobara/foobara" target="_blank" rel="noopener noreferrer" className="community-link">
            GitHub
          </a>
          <a href="http://youtube.com/@FoobaraFlix" target="_blank" rel="noopener noreferrer" className="community-link">
            YouTube
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
