import React, { useState } from 'react'

import CliConnectorDemo from './Cli/CliConnectorDemo'
import McpConnectorDemo from './Mcp/McpConnectorDemo'
import RackConnectorDemo from './Rack/RackConnectorDemo'
import RailsConnectorDemo from './Rails/RailsConnectorDemo'
import ResqueConnectorDemo from './Resque/ResqueConnectorDemo'

import '../../Home.css'

export default function ConnectorsDemos () {
  const [activeConnector, setActiveConnector] = useState('cli')

  const tabs = {
    cli: 'CLI',
    mcp: 'MCP',
    rack: 'Rack',
    rails: 'Rails',
    resque: 'Resque' /*,
    resque_scheduler: "Resque Scheduler",
    agent: "Foobara Agent",
    agent_cli: "Foobara Agent CLI" */
  }

  const tabButtons = Object.entries(tabs).map(([tabId, tabLabel]) => {
    return (<button
      key={tabId}
      className={`connector-button ${activeConnector === tabId ? 'active' : ''}`}
      onClick={() => { setActiveConnector(tabId) }}
    >
      {tabLabel}
    </button>)
  })

  return (<>
    <div className="connector-selector">
      <h3 className="connector-selector-label">Explore Connectors</h3>
      <div className="connector-buttons">
        {tabButtons}
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
    {activeConnector === 'resque' && <ResqueConnectorDemo/>}
  </>)
}
