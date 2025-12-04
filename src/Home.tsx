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
        <title>Foobara - Command-Centric and Discoverable Ruby Framework</title>
        <meta name="description" content="Write domain logic as Foobara commands and automatically get Ruby/TypeScript SDKs. Easily integrate with CLI, HTTP, MCP, AI agents, async job queues, and more." />
        <meta property="og:title" content="Foobara - Command-Centric and Discoverable Ruby Framework" />
        <meta property="og:description" content="Write domain logic as Foobara commands and automatically get Ruby/TypeScript SDKs. Easily integrate with CLI, HTTP, MCP, AI agents, async job queues, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://foobara.org/" />
        <meta property="og:image" content="https://foobara.org/images/pdcapy.jpg" />
        <meta property="og:image:alt" content="Foobara framework preview" />
        <link rel="canonical" href="https://foobara.org/" />
      </Helmet>
      <section className="hero-section">
        <div className="hero-content">
          <h2>Foobara is the Command-Centric and Discoverable Framework that Abstracts-Away Integration Code!</h2>
        </div>
      </section>

      <section className="hero-explanation">
        <p>
          Write your domain logic as Foobara commands and <strong>automatically get a Ruby or TypeScript SDK
          with no additional work!</strong> <strong>Easily integrate</strong> those commands
          with <strong>CLI</strong>, <strong>HTTP</strong>, <strong>MCP</strong>, <strong>AI agents</strong>, <strong>async job queues/schedulers</strong>...
          whatever integration you can think of. And also automatically <strong>be forward compatible with integrations
          that haven&apos;t even been thought of yet!</strong>
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
        <h2>Why Foobara?</h2>
        <div className="benefits-list">
          <div className="benefit-item">
            <h3>Domain Focus</h3>
            <p>Engineers spend more time writing code relevant to the domain and less time on tech-stack or architecture decisions.</p>
          </div>

          <div className="benefit-item">
            <h3>Clearer Mental Models</h3>
            <p>Commands form each Domain&apos;s public interface and have domain-specific names and implementation, helping with
            communication and understanding mental models across teams/orgs/systems.</p>
          </div>

          <div className="benefit-item">
            <h3>Flexible Architecture</h3>
            <p>Rearchitect systems without changing interfaces, reducing refactoring and testing requirements.</p>
          </div>
        </div>
      </section>

      <section className="tools-section">
        <h2>The Roster of Abstractions</h2>
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
            <p>Call commands in TypeScript or Ruby across system boundaries with the same interface as local Ruby commands.</p>
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
            <p>Generate various Foobara components, and even Ruby and TypeScript/React projects from foobara manifest metadata.</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <a
          href="https://youtu.be/SSOmQqjNSVY"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button secondary"
        >
          Watch an Intro Video!
        </a>
      </section>
    </div>
  )
}

export default Home
