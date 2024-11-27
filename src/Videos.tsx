import React from 'react'
import './App.css'

function Videos () {
  return (
    <div className="Videos">
      <div>
        <h1>What is Foobara and why would one want to use a framework like this?</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/SSOmQqjNSVY?si=yivq1SgJldU2ugDe"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div>
        <h1>A Foobara code demo</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3_cUiO3cCGg?si=g2pgGY1e6yI4OjnK"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>

      <div>
        <h1>Model/Entity basics code demo (plus transactions)</h1>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/EPuQFIuqtMA?si=u4I9gDoKzJZxMhbN"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
    </div>
  )
}

export default Videos
