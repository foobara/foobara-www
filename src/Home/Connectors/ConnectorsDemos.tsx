import React, { useState } from 'react'

import CliConnectorDemo from './Cli/CliConnectorDemo'
import McpConnectorDemo from './Mcp/McpConnectorDemo'
import RackConnectorDemo from './Rack/RackConnectorDemo'
import RailsConnectorDemo from './Rails/RailsConnectorDemo'
import '../../Home.css'

export default function ConnectorsDemos () {
  const [activeConnector, setActiveConnector] = useState('cli')

  return (<>
    <div className="connector-selector">
      <h3 className="connector-selector-label">Explore Connectors</h3>
      <div className="connector-buttons">
        <button
          className={`connector-button ${activeConnector === 'cli' ? 'active' : ''}`}
          onClick={() => { setActiveConnector('cli') }}
        >
          CLI
        </button>
        <button
          className={`connector-button ${activeConnector === 'mcp' ? 'active' : ''}`}
          onClick={() => { setActiveConnector('mcp') }}
        >
          MCP
        </button>
        <button
          className={`connector-button ${activeConnector === 'rack' ? 'active' : ''}`}
          onClick={() => { setActiveConnector('rack') }}
        >
          Rack
        </button>
        <button
          className={`connector-button ${activeConnector === 'rails' ? 'active' : ''}`}
          onClick={() => { setActiveConnector('rails') }}
        >
          Rails
        </button>
        <a
          href="https://github.com/foobara/resque-connector"
          target="_blank"
          rel="noopener noreferrer"
          className="connector-button"
        >
          Resque
        </a>
        <a
          href="https://github.com/foobara/resque-scheduler-connector"
          target="_blank"
          rel="noopener noreferrer"
          className="connector-button"
        >
          Resque Scheduler
        </a>
        <a
          href="https://github.com/foobara/agent"
          target="_blank"
          rel="noopener noreferrer"
          className="connector-button"
        >
          Foobara Agent
        </a>
        <a
          href="https://github.com/foobara/agent-cli"
          target="_blank"
          rel="noopener noreferrer"
          className="connector-button"
        >
          Foobara Agent CLI
        </a>
      </div>
    </div>

    {activeConnector === 'cli' && <CliConnectorDemo/>}
    {activeConnector === 'mcp' && <McpConnectorDemo/>}
    {activeConnector === 'rack' && <RackConnectorDemo/>}
    {activeConnector === 'rails' && <RailsConnectorDemo/>}
  </>)
}
