import React, { useState } from 'react'

import SimpleCommandCode from './SimpleCommandCode'
import '../Home.css'

export default function SimpleCommandCodeDemo () {
  const [activeTab, setActiveTab] = useState('code')

  return (<div className="example-with-image">
      <div className="baby-capybara-bottle-side">
        <h2>Baby&apos;s First Command!</h2>
        <div className="baby-capybara-bottle-image-container">
          <img
            src="/images/Capybara_baby_bottle.jpeg"
            alt="Baby capybara drinking from a bottle"
            className="baby-capybara-bottle-image"
          />
          <p className="image-attribution">
            <a
              href="https://commons.wikimedia.org/wiki/User:CaplinRous"
              target="_blank"
              rel="noopener noreferrer"
            >
              CaplinRous
            </a> at English Wikipedia,{' '}
            <a
              href="https://creativecommons.org/licenses/by-sa/3.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC BY-SA 3.0
            </a>, via Wikimedia Commons
          </p>
        </div>
      </div>

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
        </div>

        <div className="tab-content">
          {activeTab !== 'output' && (
            <a
              href="https://github.com/foobara/examples/blob/main/v1_foobara_101/chapter_1_commands/part_1.1_greet.rb"
              target="_blank"
              rel="noopener noreferrer"
              className="tab-link tab-script-link"
            >
              View on GitHub →
            </a>
          )}
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
    </div>)
}
