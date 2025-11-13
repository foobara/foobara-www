import React from 'react'

import { ConnectorDemo, type TabGroup } from '../ConnectorDemo'

import CliConnectorCode from './CliConnectorCode'
import CliConnectorCodeTypes from './CliConnectorCodeTypes'
import CliConnectorCodeCommands from './CliConnectorCodeCommands'
import CliConnectorCodeOutput from './CliConnectorCodeOutput'

import '../../../Home.css'

export default function CliConnectorDemo () {
  const tabGroup: TabGroup = {
    integrationId: 'cli',
    integrationName: 'CLI',
    githubLink: 'https://github.com/foobara/sh-cli-connector?tab=readme-ov-file#foobarashcliconnector',
    hideLinksOn: ['output'],
    tabs: [
      { tabId: 'commands', tabLabel: 'Commands', html: CliConnectorCodeCommands },
      { tabId: 'types', tabLabel: 'Types', html: CliConnectorCodeTypes },
      { tabId: 'connector', tabLabel: 'CLI Connector', html: CliConnectorCode },
      { tabId: 'output', tabLabel: 'Output', html: CliConnectorCodeOutput }
    ]
  }

  return (<ConnectorDemo tabGroup={tabGroup}/>)
}
