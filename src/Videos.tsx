import React from 'react'
import { Helmet } from 'react-helmet-async'
import './App.css'

function Videos () {
  // Note: these youtube video formats render thumbnails but the shorter ones don't for some reason
  const videos = [
    {
      url: 'https://www.youtube.com/watch?v=EICBr7tTlFE',
      title: 'How to quickly add Foobara as a service-object Layer to an existing Rails app'
    },
    {
      url: 'https://www.youtube.com/watch?v=BCKGvKTk3cU&t=6041s',
      title: 'Using AI-backed domain logic in Foobara to model and execute business rules'
    },
    {
      url: 'https://www.youtube.com/watch?v=N5BJfzhL3Ig',
      title: 'Creating two AgentBackedCommands that coordinate and some ' +
             'epiphanies about domain logic and prototyping with LLMs'
    },
    {
      url: 'https://www.youtube.com/watch?v=IMAABWxnbUM&t=6583s',
      title: 'Foobara presentation at SF Ruby meetup at Github.com!'
    },
    {
      url: 'https://www.youtube.com/watch?v=xu09IkchT_I&t=3602s',
      title: 'A Live presentation and code demo of Foobara at Chicago Ruby meetup at Workforce.com!'
    },
    {
      url: 'https://www.youtube.com/watch?v=hBleW4m9JFQ',
      title: 'Writing an AI Agent in 1 Line of Ruby Code using Foobara\'s AgentBackedCommand'
    },
    {
      url: 'https://www.youtube.com/watch?v=uFRKk_nnDiE',
      title: 'Foobara::Agent code demo'
    },
    {
      url: 'https://www.youtube.com/watch?v=MsCCcz63umc',
      title: 'Foobara::LLmBackedCommand: Write commands without logic and use LLM knowledge or decision-making programmatically!'
    },
    {
      url: 'https://www.youtube.com/watch?v=_w3ZHdiJEGU',
      title: 'Foobara MCP connector: Create an MCP server for your Ruby code with great ease!'
    },
    {
      url: 'https://www.youtube.com/watch?v=SSOmQqjNSVY',
      title: 'What is Foobara and why would one want to use a framework like this?'
    },
    {
      url: 'https://www.youtube.com/watch?v=3_cUiO3cCGg',
      title: 'A Foobara code demo'
    },
    {
      url: 'https://www.youtube.com/watch?v=EPuQFIuqtMA',
      title: 'Model/Entity basics code demo (plus transactions)'
    }
  ]

  const getVideoId = (url: string) => {
    const match = url.match(/[?&]v=([^&]+)/)

    if (match != null) {
      return match[1]
    } else {
      return ''
    }
  }

  return (
    <div className="Videos">
      <Helmet>
        <title>Foobara Videos - Tutorials and Demos</title>
        <meta name="description" content="Watch video tutorials covering various Foobara features, AI agents, MCP connectors, live presentations, and code demos. Learn from real-world examples." />
        <meta property="og:title" content="Foobara Videos - Tutorials and Demos" />
        <meta property="og:description" content="Watch video tutorials covering Foobara features, AI agents, MCP connectors, live presentations, and code demos. Learn from real-world examples." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://foobara.org/videos/" />
        <meta property="og:image" content="https://foobara.org/images/pdcapy.jpg" />
        <meta property="og:image:alt" content="Foobara framework preview" />
        <link rel="canonical" href="https://foobara.org/videos/" />
      </Helmet>
      <h1>Foobara Videos</h1>
      <div className="videos-list">
        {videos.map((video) => (
          <div key={video.url} className="video-item">
            <div className="video-thumbnail">
              <img
                src={`https://img.youtube.com/vi/${getVideoId(video.url)}/mqdefault.jpg`}
                alt={video.title}
                onClick={() => window.open(video.url, '_blank')}
              />
            </div>
            <div className="video-info">
              <a
                href={video.url}
                target="_blank"
                rel="noopener noreferrer"
                className="video-title"
              >
                {video.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Videos
