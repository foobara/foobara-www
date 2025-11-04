import React, { useState } from 'react'

import SimpleCommandCode from './SimpleCommandCode'
import '../Home.css'

export default function SimpleCommandCodeDemo () {
  const [activeTab, setActiveTab] = useState('code')

  return (<section className="example-section">
    <h2>A Simple Command</h2>

    <div className="example-container">
      <div className="tabs">
        <div>
          <button
            className={`tab ${activeTab === 'code' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('code')
            }}
          >
            Code
          </button>
          <button
            className={`tab ${activeTab === 'output' ? 'active' : ''}`}
            onClick={() => {
              setActiveTab('output')
            }}
          >
            Output
          </button>
        </div>
        <a
          href="https://github.com/foobara/examples/blob/main/v1_foobara_101/chapter_1_commands/part_1.1_greet.rb"
          target="_blank"
          rel="noopener noreferrer"
          className="tab-link"
        >
          View on GitHub →
        </a>
      </div>

      <div className="tab-content">
        {activeTab === 'code' && (<SimpleCommandCode/>)}

        {activeTab === 'output' && (
          <pre><code>{`$ ./greet.rb
Hello, World!
Hello, Fumiko!
Hello, Barbara!
Hello, Basil!
$`}</code></pre>
        )}
      </div>
    </div>
  </section>)
}
