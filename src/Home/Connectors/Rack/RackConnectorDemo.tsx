import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'

import RackConnectorCode from './RackConnectorCode'
import RackConnectorCodeCommands from './RackConnectorCodeCommands'
import '../../../Home.css'

export default function RackConnectorDemo () {
  const [activeTab, setActiveTab] = useState('connector')

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
              className={`tab ${activeTab === 'connector' ? 'active' : ''}`}
              onClick={() => { setActiveTab('connector') } }
            >
              Rack Connector
            </button>
            <button
              className={`tab ${activeTab === 'output' ? 'active' : ''}`}
              onClick={() => { setActiveTab('output') } }
            >
              Output
            </button>
          </div>
        </div>

        <div className="tab-content" style={{ position: 'relative' }}>
          <a
            href="https://github.com/foobara/rack-connector?tab=readme-ov-file#example"
            target="_blank"
            rel="noopener noreferrer"
            className="tab-link"
            style={{ position: 'absolute', top: '3.5rem', right: '0.5rem', zIndex: 10 }}
          >
            View on GitHub <span style={{ marginLeft: '0.4rem', display: 'inline-block', verticalAlign: 'middle', position: 'relative', top: '1px' }}>{FaGithub({ size: 16 })}</span>
          </a>
          {activeTab === 'commands' && (<RackConnectorCodeCommands/>)}
          {activeTab === 'connector' && (<RackConnectorCode/>)}

          {activeTab === 'output' && (
            <pre><code>{`$ curl 'localhost:9292/run/Add?operand1=5&operand2=6'
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
        <div className="meme-text meme-text-mcp">Rack</div>
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
