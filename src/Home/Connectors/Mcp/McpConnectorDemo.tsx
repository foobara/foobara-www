import React from 'react'

import { ConnectorDemo, type TabGroup } from '../ConnectorDemo'

import McpConnectorCodeCommands from './McpConnectorCodeCommands'
import McpConnectorCodeTypes from './McpConnectorCodeTypes'
import McpConnectorCodeSetup from './McpConnectorCodeSetup'
import McpConnectorCode from './McpConnectorCode'
import McpConnectorCodeOutput from './McpConnectorCodeOutput'

import '../../../Home.css'

export default function McpConnectorDemo () {
  const tabGroup: TabGroup = {
    integrationId: 'mcp',
    integrationName: 'MCP',
    githubLink: 'https://github.com/foobara/mcp-connector?tab=readme-ov-file#foobaramcpconnector',
    videoLink: 'https://www.youtube.com/watch?v=_w3ZHdiJEGU',
    hideLinksOn: ['output', 'setup'],
    tabs: [
      { tabId: 'commands', tabLabel: 'Commands', html: McpConnectorCodeCommands },
      { tabId: 'types', tabLabel: 'Types', html: McpConnectorCodeTypes },
      { tabId: 'setup', tabLabel: 'Setup', html: McpConnectorCodeSetup },
      { tabId: 'connector', tabLabel: 'MCP Connector', html: McpConnectorCode },
      { tabId: 'output', tabLabel: 'Output', html: McpConnectorCodeOutput }
    ]
  }

  return (<ConnectorDemo tabGroup={tabGroup}/>)
}
