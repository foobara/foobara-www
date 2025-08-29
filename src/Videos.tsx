import React from 'react'
import './App.css'

function Videos () {
  const videos = [
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
      <h1>Foobara Video Tutorials</h1>
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
