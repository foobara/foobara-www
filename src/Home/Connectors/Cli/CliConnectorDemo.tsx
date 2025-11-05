import React, { useState } from 'react'

import CliConnectorCode from './CliConnectorCode'
import CliConnectorCodeTypes from './CliConnectorCodeTypes'
import CliConnectorCodeCommands from './CliConnectorCodeCommands'
import '../../../Home.css'

export default function CliConnectorDemo () {
  const [activeTab, setActiveTab] = useState('connector')

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
          <a
            href="https://github.com/foobara/examples/blob/main/v1_foobara_101/chapter_5_command_connectors/part_1_cli_command_connector.rb"
            target="_blank"
            rel="noopener noreferrer"
            className="tab-link"
          >
            View on GitHub →
          </a>
        </div>

        <div className="tab-content">
          {activeTab === 'commands' && (<CliConnectorCodeCommands/>)}
          {activeTab === 'types' && (<CliConnectorCodeTypes/>)}
          {activeTab === 'connector' && (<CliConnectorCode/>)}

          {activeTab === 'output' && (
            <pre><code>{`$ ./capy-cafe help
Usage: capy-cafe [GLOBAL_OPTIONS] [ACTION] [COMMAND_OR_TYPE] [COMMAND_INPUTS]

Available commands:

  CreateCapybara   Just creates a capybara!
  IncrementAge     A trip around the sun!
  FindCapybara     Just tell us who you want to find!

$ ./capy-cafe help FindCapybara
Usage: capy-cafe [GLOBAL_OPTIONS] FindCapybara [COMMAND_INPUTS]

Just tell us who you want to find!

Command inputs:

 -i, --id ID                      Required

$ ./capy-cafe FindCapybara --id 3
id: 3,
name: "Basil",
nickname: "baz",
age: 301
$ ./capy-cafe help IncrementAge
Usage: capy-cafe [GLOBAL_OPTIONS] IncrementAge [COMMAND_INPUTS]

A trip around the sun!

Command inputs:

 -c, --capybara CAPYBARA          Required

$ ./capy-cafe IncrementAge --capybara 3
id: 3,
name: "Basil",
nickname: "baz",
age: 302
$ ./capy-cafe FindCapybara --id 3
id: 3,
name: "Basil",
nickname: "baz",
age: 302
$
`}</code></pre>
          )}
        </div>
      </div>
    </div>)
}
