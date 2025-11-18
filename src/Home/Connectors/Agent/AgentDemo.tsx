import React from 'react'

import { ConnectorDemo, type TabGroup } from '../ConnectorDemo'

import ConnectorCodeCommands from './ConnectorCodeCommands'
import ConnectorCode from './ConnectorCode'
import ConnectorCodeOutput from './ConnectorCodeOutput'
import ConnectorCodeSetup from './ConnectorCodeSetup'
import ConnectorCodeTypes from './ConnectorCodeTypes'

import '../../../Home.css'

export default function AgentDemo () {
  const tabGroup: TabGroup = {
    integrationId: 'agent',
    integrationName: 'Foobara::Agent',
    githubLink: 'https://github.com/foobara/agent?tab=readme-ov-file#foobaraagent',
    scriptGithubLink: 'https://github.com/foobara/agent/blob/main/example_scripts/capybaras_agent_script_result_type.rb',
    videoLink: 'https://www.youtube.com/watch?v=uFRKk_nnDiE',
    hideLinksOn: ['output', 'setup'],
    tabs: [
      { tabId: 'commands', tabLabel: 'Commands', html: ConnectorCodeCommands },
      { tabId: 'types', tabLabel: 'Types', html: ConnectorCodeTypes },
      { tabId: 'connector', tabLabel: 'Foobara::Agent', html: ConnectorCode },
      { tabId: 'setup', tabLabel: 'Setup', html: ConnectorCodeSetup },
      { tabId: 'output', tabLabel: 'Output', html: ConnectorCodeOutput }
    ]
  }

  return (<ConnectorDemo tabGroup={tabGroup}/>)
}
