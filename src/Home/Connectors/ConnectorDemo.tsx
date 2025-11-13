import React, { useState } from 'react'
import { FaGithub } from 'react-icons/fa'

import '../../Home.css'

export interface TabGroup {
  tabs: TabInfo[]
  integrationId: string
  integrationName: string
  githubLink?: string | undefined
  videoLink?: string | undefined
}

export interface TabInfo {
  tabLabel: string
  tabId: string
  html: string
}

export function ConnectorDemo ({ tabGroup }: { tabGroup: TabGroup }) {
  const [activeTabId, setActiveTabId] = useState('connector')

  const tabs = tabGroup.tabs
  const activeTab: TabInfo = tabs.find((tab) => {
    return tab.tabId === activeTabId
  }) as unknown as TabInfo

  const githubLink = tabGroup.githubLink

  const hasGithubLink: boolean = typeof githubLink === 'string'

  const classes: string = `meme-text-meme ${tabGroup.integrationId}`

  return (<div className="example-with-image">
    <div className="example-container wide">
      <div className="tabs">
        <div>
          {tabs.map((tab) => {
            return (<button
              key={tab.tabId}
              className={`tab ${activeTabId === tab.tabId ? 'active' : ''}`}
              onClick={() => { setActiveTabId(tab.tabId) } }
            >
              {tab.tabLabel}
            </button>)
          })}
        </div>
      </div>

      <div className="tab-content" style={{ position: 'relative' }}>
        {hasGithubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="tab-link"
              style={{ position: 'absolute', top: '3.5rem', right: '0.75rem', zIndex: 10 }}
            >
              View on GitHub <span style={{ marginLeft: '0.4rem', display: 'inline-block', verticalAlign: 'middle', position: 'relative', top: '1px' }}>{FaGithub({ size: 16 })}</span>
            </a>
        )
        }
        <pre><code dangerouslySetInnerHTML={{ __html: activeTab.html }} /></pre>
      </div>
    </div>

    <div className="capy-and-dog-image-container">
      <img
        src="/images/capy_and_dog.jpg"
        alt="Capybara and dog"
        className="capy-and-dog-image"
      />
      <div className="meme-text meme-text-foobara">Foobara</div>
      <div className={classes}>{tabGroup.integrationName}</div>
      <p className="image-attribution">
        <a
          href="https://linktr.ee/darkwingswildlife"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dark Wings Wildlife & Education
        </a>
      </p>
    </div>
  </div>)
}
