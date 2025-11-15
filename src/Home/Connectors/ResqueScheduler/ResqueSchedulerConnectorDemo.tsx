import React from 'react'

import { ConnectorDemo, type TabGroup } from '../ConnectorDemo'

import ConnectorCodeCommands from './ConnectorCodeCommands'
import ConnectorCode from './ConnectorCode'
import ConnectorCodeOutput from './ConnectorCodeOutput'
import ConnectorCodeSetup from './ConnectorCodeSetup'
import ConnectorCodeTypes from './ConnectorCodeTypes'

import '../../../Home.css'

export default function ResqueSchedulerConnectorDemo () {
  const tabGroup: TabGroup = {
    integrationId: 'resque-scheduler',
    integrationName: 'Resque Scheduler',
    projectName: 'ResqueSchedulerConnector',
    githubLink: 'https://github.com/foobara/resque-scheduler-connector?tab=readme-ov-file#foobararesqueschedulerconnector',
    scriptGithubLink: 'https://github.com/foobara/examples/blob/main/v1_foobara_101/chapter_5_command_connectors/part_6_scheduler_command_connector.rb',
    // hideLinksOn: ['setup'],
    tabs: [
      { tabId: 'commands', tabLabel: 'Commands', html: ConnectorCodeCommands },
      { tabId: 'types', tabLabel: 'Types', html: ConnectorCodeTypes },
      { tabId: 'connector', tabLabel: 'Resque Scheduler Connector', html: ConnectorCode },
      { tabId: 'setup', tabLabel: 'Setup', html: ConnectorCodeSetup },
      { tabId: 'output', tabLabel: 'Output', html: ConnectorCodeOutput }
    ]
  }

  return (<ConnectorDemo tabGroup={tabGroup}/>)
}
