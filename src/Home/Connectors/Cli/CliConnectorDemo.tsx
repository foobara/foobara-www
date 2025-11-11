import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'

import ConnectorDemo from './ConnectorDemo'
import TabInfo from '../'

import CliConnectorCode from './CliConnectorCode'
import CliConnectorCodeTypes from './CliConnectorCodeTypes'
import CliConnectorCodeCommands from './CliConnectorCodeCommands'
import CliConnectorCodeOutput from "./CliConnectorCodeOutput";

import '../../../Home.css'

export default function CliConnectorDemo () {
  const [activeTab, setActiveTab] = useState('connector')

  const tabInfo: 

  return (<div className="example-with-image">
      <div className="example-container wide">
        <div className="tabs">
          <div>
            <button
              className={`tab ${activeTab === 'commands' ? 'active' : ''}`}
              onClick={() => { setActiveTab('commands') } }
            >
              Commands
            </button>
            <button
              className={`tab ${activeTab === 'types' ? 'active' : ''}`}
              onClick={() => { setActiveTab('types') } }
            >
              Types
            </button>
            <button
              className={`tab ${activeTab === 'connector' ? 'active' : ''}`}
              onClick={() => { setActiveTab('connector') } }
            >
              CLI Connector
            </button>
            <button
              className={`tab ${activeTab === 'output' ? 'active' : ''}`}
              onClick={() => { setActiveTab('output') } }
            >
              Output
            </button>
          </div>
        </div>

        <div className="tab-content" style={{ position: 'relative' }}>
          <ConnectorDemo />
        </div>
      </div>
    </div>)
}
