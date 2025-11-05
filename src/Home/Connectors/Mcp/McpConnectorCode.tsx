import React from 'react'

import '../../../syntax.css'

const html = `<span class="n">mcp_connector</span> <span class="o">=</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">McpConnector</span><span class="p">.</span><span class="nf">new</span>

<span class="n">mcp_connector</span><span class="p">.</span><span class="nf">connect</span><span class="p">(</span><span class="no">FindAllCapybaras</span><span class="p">)</span>
<span class="n">mcp_connector</span><span class="p">.</span><span class="nf">connect</span><span class="p">(</span><span class="no">UpdateCapybara</span><span class="p">)</span>

<span class="n">mcp_connector</span><span class="p">.</span><span class="nf">run_stdio_server</span>`

export default function McpConnectorCode () {
  return <pre><code dangerouslySetInnerHTML={{ __html: html }} /></pre>
}
