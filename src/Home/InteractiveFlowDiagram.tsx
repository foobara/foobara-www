import React, { useState } from 'react'
import './InteractiveFlowDiagram.css'

interface ConnectorInfo {
  id: string
  name: string
  description: string
  example: string
}

const connectors: ConnectorInfo[] = [
  {
    id: 'cli',
    name: 'CLI',
    description: 'Run commands from your terminal',
    example: '$ ./my_app greet --name "World"'
  },
  {
    id: 'http',
    name: 'HTTP',
    description: 'Expose as REST API endpoints',
    example: 'POST /api/greet { "name": "World" }'
  },
  {
    id: 'mcp',
    name: 'MCP',
    description: 'AI tool integration (Claude, etc.)',
    example: 'Tool: greet | Input: { name: "World" }'
  },
  {
    id: 'agents',
    name: 'AI Agents',
    description: 'Autonomous AI workflows',
    example: 'Agent.run(Greet, name: "World")'
  },
  {
    id: 'jobs',
    name: 'Jobs',
    description: 'Background & scheduled tasks',
    example: 'GreetJob.perform_async("World")'
  }
]

export default function InteractiveFlowDiagram () {
  const [activeConnector, setActiveConnector] = useState<string | null>(null)
  const [isAnimating, setIsAnimating] = useState(true)

  const handleConnectorHover = (id: string | null): void => {
    setActiveConnector(id)
  }

  const toggleAnimation = (): void => {
    setIsAnimating(!isAnimating)
  }

  return (
    <div className="interactive-flow-container">
      <h2>See How It Works</h2>
      <p className="flow-subtitle">Write your command once. Connect it everywhere.</p>

      <div className="flow-diagram">
        {/* Central Command Node */}
        <div className={`command-node ${isAnimating ? 'pulsing' : ''}`}>
          <div className="command-icon">{ }</div>
          <span className="command-label">Your Command</span>
          <code className="command-code">class Greet &lt; Foobara::Command</code>
        </div>

        {/* Connection Lines */}
        <div className="connection-lines">
          {connectors.map((connector, index) => (
            <div
              key={connector.id}
              className={`connection-line line-${index} ${activeConnector === connector.id ? 'active' : ''} ${isAnimating ? 'flowing' : ''}`}
            >
              <div className="flow-dot"></div>
            </div>
          ))}
        </div>

        {/* Output Nodes */}
        <div className="output-nodes">
          {connectors.map((connector) => (
            <div
              key={connector.id}
              className={`output-node ${activeConnector === connector.id ? 'active' : ''}`}
              onMouseEnter={() => { handleConnectorHover(connector.id) }}
              onMouseLeave={() => { handleConnectorHover(null) }}
              onClick={() => { setActiveConnector(activeConnector === connector.id ? null : connector.id) }}
            >
              <span className="output-name">{connector.name}</span>

              {/* Tooltip */}
              <div className={`output-tooltip ${activeConnector === connector.id ? 'visible' : ''}`}>
                <strong>{connector.description}</strong>
                <code>{connector.example}</code>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instruction */}
      <p className="flow-instruction">
        <button className="animation-toggle" onClick={toggleAnimation}>
          {isAnimating ? 'Pause' : 'Play'} Animation
        </button>
        <span>Hover over any output to see how your command connects</span>
      </p>

      {/* Key Message */}
      <div className="flow-message">
        <p>
          <strong>Zero refactoring required.</strong> Add new integrations without touching your domain logic.
        </p>
      </div>
    </div>
  )
}
