import React from 'react'

import { ConnectorDemo, type TabGroup } from '../ConnectorDemo'

import RailsConnectorCode1 from './RailsConnectorCode1'
import RailsConnectorCode2 from './RailsConnectorCode2'
import RailsConnectorCodeCommands from './RailsConnectorCodeCommands'
import RailsConnectorCodeTypes from './RailsConnectorCodeTypes'
import RailsConnectorCodeOutput from './RailsConnectorCodeOutput'

import '../../../Home.css'

export default function RailsConnectorDemo () {
  const tabGroup: TabGroup = {
    integrationId: 'rails',
    integrationName: 'Rails Router',
    githubLink: 'https://github.com/foobara/rails-command-connector?tab=readme-ov-file#foobararailscommandconnector',
    startingTab: 'connector2',
    tabs: [
      { tabId: 'commands', tabLabel: 'Commands', html: RailsConnectorCodeCommands },
      { tabId: 'types', tabLabel: 'Types', html: RailsConnectorCodeTypes },
      { tabId: 'connector1', tabLabel: 'Connector Option', html: RailsConnectorCode1 },
      { tabId: 'connector2', tabLabel: 'Rails Router Option', html: RailsConnectorCode2 },
      { tabId: 'output', tabLabel: 'Output', html: RailsConnectorCodeOutput }
    ]

  }

  return (<ConnectorDemo tabGroup={tabGroup}/>)
}
