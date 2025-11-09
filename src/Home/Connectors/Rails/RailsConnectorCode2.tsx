import React from 'react'

import '../../../syntax.css'

const html = `<span class="nb">require</span> <span class="s2">"foobara/rails/routes"</span>

<span class="no">Rails</span><span class="p">.</span><span class="nf">application</span><span class="p">.</span><span class="nf">routes</span><span class="p">.</span><span class="nf">draw</span> <span class="k">do</span>
  <span class="n">command</span> <span class="no">CreateCapybara</span>
  <span class="n">command</span> <span class="no">IncrementAge</span>
  <span class="n">command</span> <span class="no">FindCapybara</span>
<span class="k">end</span>`

export default function RailsConnectorCode2 () {
  return <pre><code dangerouslySetInnerHTML={{ __html: html }} /></pre>
}
