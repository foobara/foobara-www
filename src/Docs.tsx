import React, { useEffect, useState } from 'react'
// import logo from './logo.svg'

import './App.css'

function Docs () {
  const [versionData, setVersionData] = useState<undefined | Record<string, string[]>>()
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://docs.foobara.org/data.json')

        if (!response.ok) throw new Error('Network response was not ok')

        const jsonData = await response.json()
        setVersionData(jsonData)
      } catch (error) {
        console.log(JSON.stringify(error))
        setError(error)
      }
    }

    fetchData()
  })

  return (
    <div className="Docs">
      <div>
        <h1>All Foobara gem docs in one place:</h1>
        (<a href="https://docs.foobara.org/all">All latest gems together</a>)
      </div>
      <h1>Per-gem docs:</h1>
      {versionData != null && Object.entries(versionData).map(([gemName, versions]) => (
        <div key={gemName}>
          <h3>{gemName} ({versions.map((version, index) => {
            const href: string = `https://docs.foobara.org/gems/${gemName}/${version}`
            const element = <a key={index} href={href}>{version}</a>
            if (index === versions.length - 1) {
              return element
            } else {
              return [element, ', ']
            }
          })})
          </h3>
        </div>
      ))}
      <div>{error != null && JSON.stringify(error)}</div>
    </div>
  )
}

export default Docs
