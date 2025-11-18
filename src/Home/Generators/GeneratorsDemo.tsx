import React from 'react'

import { ConnectorDemo, type TabGroup } from '../Connectors/ConnectorDemo'

import GeneratorsRoster from './GeneratorsRoster'
import Example from './Example'

import '../../Home.css'

export default function GeneratorsDemo () {
  const tabGroup: TabGroup = {
    integrationId: 'generators',
    integrationName: 'Generators',
    projectName: 'foob CLI',
    startingTab: 'roster',
    hideImage: true,
    width: 'medium',
    tabs: [
      { tabId: 'roster', tabLabel: 'Generators', html: GeneratorsRoster },
      { tabId: 'example', tabLabel: 'Generating Code', html: Example }
    ]
  }

  return (<ConnectorDemo tabGroup={tabGroup}/>)
}
