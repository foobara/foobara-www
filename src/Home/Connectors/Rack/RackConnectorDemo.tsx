import React from 'react'

import { ConnectorDemo, type TabGroup } from '../ConnectorDemo'

import RackConnectorCodeCommands from '../Rack/RackConnectorCodeCommands'
import RackConnectorCode from '../Rack/RackConnectorCode'
import RackConnectorCodeOutput from '../Rack/RackConnectorCodeOutput'

import '../../../Home.css'

export default function RackConnectorDemo () {
  const tabGroup: TabGroup = {
    integrationId: 'rack',
    integrationName: 'Rack',
    githubLink: 'https://github.com/foobara/rack-connector?tab=readme-ov-file#example',
    hideLinksOn: ['output'],
    tabs: [
      { tabId: 'commands', tabLabel: 'Commands', html: RackConnectorCodeCommands },
      { tabId: 'connector', tabLabel: 'Rack Connector', html: RackConnectorCode },
      { tabId: 'output', tabLabel: 'Output', html: RackConnectorCodeOutput }
    ]

  }

  return (<ConnectorDemo tabGroup={tabGroup}/>)
}
