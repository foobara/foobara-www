import React, { useState } from 'react'

import CliConnectorDemo from './Cli/CliConnectorDemo'
import McpConnectorDemo from './Mcp/McpConnectorDemo'
import RackConnectorDemo from './Rack/RackConnectorDemo'
import RailsConnectorDemo from './Rails/RailsConnectorDemo'
import ResqueConnectorDemo from './Resque/ResqueConnectorDemo'
import ResqueSchedulerConnectorDemo from './ResqueScheduler/ResqueSchedulerConnectorDemo'
import AgentDemo from './Agent/AgentDemo'

import '../../Home.css'

const tabs = {
  cli: 'CLI',
  mcp: 'MCP',
  rack: 'Rack',
  rails: 'Rails',
  resque: 'Resque',
  resque_scheduler: 'Resque Scheduler',
  agent: 'Foobara::Agent' /* ,
    agent_cli: "Foobara Agent CLI" */
}

type tabEnum = keyof typeof tabs

export default function ConnectorsDemos () {
  const [activeConnector, setActiveConnector] = useState<tabEnum>('cli')

  const tabButtons = Object.entries(tabs).map(([tabId, tabLabel]) => {
    return (<button
      key={tabId}
      className={`connector-button ${activeConnector === tabId ? 'active' : ''}`}
      onClick={() => { setActiveConnector(tabId as tabEnum) }}
    >
      {tabLabel}
    </button>)
  })

  const tabToDemo: Record<tabEnum, () => JSX.Element> = {
    cli: () => (<CliConnectorDemo/>),
    mcp: () => (<McpConnectorDemo/>),
    rack: () => (<RackConnectorDemo/>),
    rails: () => (<RailsConnectorDemo/>),
    resque: () => (<ResqueConnectorDemo/>),
    resque_scheduler: () => (<ResqueSchedulerConnectorDemo/>),
    agent: () => (<AgentDemo/>)
  }

  const demo = tabToDemo[activeConnector]()

  return (<>
    <div className="connector-selector">
      <h3 className="connector-selector-label">Explore Connectors</h3>
      <div className="connector-buttons">
        {tabButtons}
      </div>
    </div>

    {demo}
  </>)
}
