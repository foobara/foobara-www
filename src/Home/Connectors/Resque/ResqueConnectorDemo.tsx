import React from 'react'

import { ConnectorDemo, type TabGroup } from '../ConnectorDemo'

import ConnectorCodeCommands from './ConnectorCodeCommands'
import ConnectorCode from './ConnectorCode'
import ConnectorCodeOutput from './ConnectorCodeOutput'
import ConnectorCodeSetup from './ConnectorCodeSetup'
import ConnectorCodeTypes from './ConnectorCodeTypes'

import '../../../Home.css'

export default function ResqueConnectorDemo () {
  const tabGroup: TabGroup = {
    integrationId: 'resque',
    integrationName: 'Resque',
    projectName: 'ResqueConnector',
    scriptGithubLink: 'https://github.com/foobara/examples/blob/main/v1_foobara_101/chapter_5_command_connectors/part_5c_async_command_connector.rb',
    githubLink: 'https://github.com/foobara/resque-connector?tab=readme-ov-file#foobararesqueconnector',
    hideLinksOn: ['setup'],
    tabs: [
      { tabId: 'commands', tabLabel: 'Commands', html: ConnectorCodeCommands },
      { tabId: 'types', tabLabel: 'Types', html: ConnectorCodeTypes },
      { tabId: 'connector', tabLabel: 'Resque Connector', html: ConnectorCode },
      { tabId: 'setup', tabLabel: 'Setup', html: ConnectorCodeSetup },
      { tabId: 'output', tabLabel: 'Output', html: ConnectorCodeOutput }
    ]
  }

  return (<ConnectorDemo tabGroup={tabGroup}/>)
}
