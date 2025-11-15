import React, { useState } from 'react'
import { FaGithub, FaYoutube } from 'react-icons/fa'

import '../../Home.css'

export interface TabGroup {
  tabs: TabInfo[]
  integrationId: string
  integrationName: string
  projectName?: string | undefined
  startingTab?: string | undefined
  githubLink?: string | undefined
  scriptGithubLink?: string | undefined
  videoLink?: string | undefined
  hideLinksOn?: string[] | undefined
}

export interface TabInfo {
  tabLabel: string
  tabId: string
  html: string
}

export function ConnectorDemo ({ tabGroup }: { tabGroup: TabGroup }) {
  const startingTab = tabGroup.startingTab ?? 'connector'
  const [activeTabId, setActiveTabId] = useState(startingTab)

  const tabs = tabGroup.tabs
  const activeTab: TabInfo = tabs.find((tab) => {
    return tab.tabId === activeTabId
  }) as unknown as TabInfo

  const projectName: string = tabGroup.projectName ?? tabGroup.integrationName

  const hideLinksOn = tabGroup.hideLinksOn ?? []
  const githubLink = tabGroup.githubLink
  const scriptGithubLink = tabGroup.scriptGithubLink

  const videoLink = tabGroup.videoLink
  const includeLinks = !hideLinksOn.includes(activeTabId)
  const showScriptGithubLink: boolean = includeLinks && typeof scriptGithubLink === 'string'
  const showGithubLink: boolean = includeLinks && typeof githubLink === 'string'
  const showVideoLink: boolean = includeLinks && typeof videoLink === 'string'

  const classes: string = `meme-text meme-text-meme meme-text-${tabGroup.integrationId}`

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

      <div className="tab-content">
        {showScriptGithubLink && (
            <a
              href={scriptGithubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`tab-link tab-script-link tab-script-link-${tabGroup.integrationId} tab-script-link-${tabGroup.integrationId}-${activeTabId}`}
            >
              This Script on GitHub <span>{FaGithub({ size: 16 })}</span>
            </a>
        )}
        {showGithubLink && (
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`tab-link tab-project-link tab-project-link-${tabGroup.integrationId} tab-project-link-${tabGroup.integrationId}-${activeTabId}`}
            >
              {projectName} on GitHub <span>{FaGithub({ size: 16 })}</span>
            </a>
        )}
        {showVideoLink && (
            <a
              href={videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`tab-link tab-link-video tab-link-video-${tabGroup.integrationId} tab-link-video-${tabGroup.integrationId}-${activeTabId}`}
            >
              Watch Video <span>{FaYoutube({ size: 16 })}</span>
            </a>
        )}
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
