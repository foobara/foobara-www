import React, { useState } from 'react'

import RailsConnectorCode1 from './RailsConnectorCode1'
import RailsConnectorCode2 from './RailsConnectorCode2'
import RailsConnectorCodeCommands from './RailsConnectorCodeCommands'
import RailsConnectorCodeTypes from './RailsConnectorCodeTypes'
import '../../../Home.css'

export default function RailsConnectorDemo () {
  const [activeTab, setActiveTab] = useState('connector2')

  return (<div className="example-with-image">
      <div className="example-container wide">
        <div className="tabs">
          <div>
            <button
              className={`tab ${activeTab === 'commands' ? 'active' : ''}`}
              onClick={() => { setActiveTab('commands') } }
            >
              Commands
            </button>
            <button
              className={`tab ${activeTab === 'types' ? 'active' : ''}`}
              onClick={() => { setActiveTab('types') } }
            >
              Types
            </button>
            <button
              className={`tab ${activeTab === 'connector1' ? 'active' : ''}`}
              onClick={() => { setActiveTab('connector1') } }
            >
              Connector Option
            </button>
            <button
              className={`tab ${activeTab === 'connector2' ? 'active' : ''}`}
              onClick={() => { setActiveTab('connector2') } }
            >
              Rails Routes Option
            </button>
            <button
              className={`tab ${activeTab === 'output' ? 'active' : ''}`}
              onClick={() => { setActiveTab('output') } }
            >
              Output
            </button>
          </div>
          <a
            href="https://github.com/foobara/rails-command-connector"
            target="_blank"
            rel="noopener noreferrer"
            className="tab-link"
          >
            View on GitHub →
          </a>
        </div>

        <div className="tab-content">
          {activeTab === 'commands' && (<RailsConnectorCodeCommands/>)}
          {activeTab === 'types' && (<RailsConnectorCodeTypes/>)}
          {activeTab === 'connector1' && (<RailsConnectorCode1/>)}
          {activeTab === 'connector2' && (<RailsConnectorCode2/>)}

          {activeTab === 'output' && (
            <pre><code>{`$ curl 'localhost:3000/run/Add?operand1=5&operand2=6'
11
`}</code></pre>
          )}
        </div>
      </div>

      <div className="capy-and-dog-image-container">
        <img
          src="/images/capy_and_dog.jpg"
          alt="Capybara and dog"
          className="capy-and-dog-image"
        />
        <div className="meme-text meme-text-foobara">Foobara</div>
        <div className="meme-text meme-text-rails">Rails Router</div>
        <p className="image-attribution">
          <a
            href="https://linktr.ee/darkwingswildlife"
            target="_blank"
            rel="noopener noreferrer"
          >
            Dark Wings Wildlife & Education
          </a>
        </p>
      </div>
    </div>)
}
