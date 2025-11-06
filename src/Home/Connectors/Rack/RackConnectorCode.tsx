import React from 'react'

import '../../../syntax.css'

const html = `<span class="n">command_connector</span> <span class="o">=</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">CommandConnectors</span><span class="o">::</span><span class="no">Http</span><span class="o">::</span><span class="no">Rack</span><span class="p">.</span><span class="nf">new</span>
<span class="n">command_connector</span><span class="p">.</span><span class="nf">connect</span><span class="p">(</span><span class="no">Add</span><span class="p">)</span>

<span class="n">command_connector</span><span class="p">.</span><span class="nf">run_puma</span>`

export default function RackConnectorCode () {
  return <pre><code dangerouslySetInnerHTML={{ __html: html }} /></pre>
}
