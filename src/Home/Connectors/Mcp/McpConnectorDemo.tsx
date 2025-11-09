import React, { useState } from 'react'
import { FaGithub, FaYoutube } from 'react-icons/fa'

import McpConnectorCode from './McpConnectorCode'
import McpConnectorCodeTypes from './McpConnectorCodeTypes'
import McpConnectorCodeCommands from './McpConnectorCodeCommands'
import McpConnectorCodeSetup from './McpConnectorCodeSetup'
import '../../../Home.css'

export default function McpConnectorDemo () {
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
              className={`tab ${activeTab === 'types' ? 'active' : ''}`}
              onClick={() => { setActiveTab('types') } }
            >
              Types
            </button>
            <button
              className={`tab ${activeTab === 'setup' ? 'active' : ''}`}
              onClick={() => { setActiveTab('setup') } }
            >
              Setup
            </button>
            <button
              className={`tab ${activeTab === 'connector' ? 'active' : ''}`}
              onClick={() => { setActiveTab('connector') } }
            >
              MCP Connector
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
            href="https://github.com/foobara/mcp-connector?tab=readme-ov-file#foobaramcpconnector"
            target="_blank"
            rel="noopener noreferrer"
            className="tab-link"
            style={{ position: 'absolute', top: '3.5rem', right: '0.5rem', zIndex: 10 }}
          >
            View it on GitHub <span style={{ marginLeft: '0.4rem', display: 'inline-block', verticalAlign: 'middle', position: 'relative', top: '1px' }}>{FaGithub({ size: 16 })}</span>
          </a>
          <a
            href="https://www.youtube.com/watch?v=_w3ZHdiJEGU"
            target="_blank"
            rel="noopener noreferrer"
            className="tab-link"
            style={{ position: 'absolute', top: '7rem', right: '0.5rem', zIndex: 10 }}
          >
            McpConnector Video <span style={{ marginLeft: '0.4rem', display: 'inline-block', verticalAlign: 'middle', position: 'relative', top: '1px' }}>{FaYoutube({ size: 16 })}</span>
          </a>
          {activeTab === 'commands' && (<McpConnectorCodeCommands/>)}
          {activeTab === 'types' && (<McpConnectorCodeTypes/>)}
          {activeTab === 'setup' && (<McpConnectorCodeSetup/>)}
          {activeTab === 'connector' && (<McpConnectorCode/>)}

          {activeTab === 'output' && (
            <pre><code>{`$ claude
> Hi! There's a Capybara whose birth year was entered incorrectly. Can you
  find which one and fix it? Thanks!
● I'll help find and fix the capybara with the incorrect birth year. Let me
  search for the capybaras first.
● mcp-test:FindAllCapybaras (MCP)()…
  ⎿  [
       {
         "name": "Fumiko",
         "year_of_birth": 2020,
         "id": 1

     … +7 lines (ctrl+r to expand)

         "name": "Basil",
         "year_of_birth": 2021,
         "id": 3
       }
     ]
● It looks like Barbara (id 2) has an incorrect birth year of 19, which is
  too low. Let me fix that to 2019.
● mcp-test:UpdateCapybara (MCP)(id: 2, year_of_birth: 2019)…
  ⎿  {
       "name": "Barbara",
       "year_of_birth": 2019,
       "id": 2
     }
● Fixed! Barbara's birth year has been updated from 19 to 2019.
> Great! Thanks!
● You're welcome!`}</code></pre>
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
        <div className="meme-text meme-text-mcp">MCP</div>
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
