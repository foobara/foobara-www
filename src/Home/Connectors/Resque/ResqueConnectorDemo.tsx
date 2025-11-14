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
    githubLink: 'https://github.com/foobara/resque-connector?tab=readme-ov-file#foobararesqueconnector',
    hideLinksOn: ['setup', 'output'],
    tabs: [
      { tabId: 'commands', tabLabel: 'Commands', html: ConnectorCodeCommands },
      { tabId: 'types', tabLabel: 'Commands', html: ConnectorCodeTypes },
      { tabId: 'connector', tabLabel: 'ResqueConnector', html: ConnectorCode },
      { tabId: 'setup', tabLabel: 'Setup', html: ConnectorCodeSetup },
      { tabId: 'output', tabLabel: 'Output', html: ConnectorCodeOutput }
    ]
  }

  return (<ConnectorDemo tabGroup={tabGroup}/>)
}
