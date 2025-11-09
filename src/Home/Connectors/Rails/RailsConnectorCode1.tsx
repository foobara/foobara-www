import React from 'react'

import '../../../syntax.css'

const html = `<span class="n">connector</span> <span class="o">=</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">CommandConnectors</span><span class="o">::</span><span class="no">RailsCommandConnector</span><span class="p">.</span><span class="nf">new</span>

<span class="n">connector</span><span class="p">.</span><span class="nf">connect</span><span class="p">(</span><span class="no">CreateCapybara</span><span class="p">)</span>
<span class="n">connector</span><span class="p">.</span><span class="nf">connect</span><span class="p">(</span><span class="no">IncrementAge</span><span class="p">)</span>
<span class="n">connector</span><span class="p">.</span><span class="nf">connect</span><span class="p">(</span><span class="no">FindCapybara</span><span class="p">)</span>`

export default function RailsConnectorCode1 () {
  return <pre><code dangerouslySetInnerHTML={{ __html: html }} /></pre>
}
