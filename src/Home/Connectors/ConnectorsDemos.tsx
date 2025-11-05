import React, { useState } from 'react'

import CliConnectorDemo from './Cli/CliConnectorDemo'
import McpConnectorDemo from './Mcp/McpConnectorDemo'
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
      </div>
    </div>

    {activeConnector === 'cli' && <CliConnectorDemo/>}
    {activeConnector === 'mcp' && <McpConnectorDemo/>}
  </>)
}
