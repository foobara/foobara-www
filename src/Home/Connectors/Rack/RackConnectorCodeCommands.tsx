import React from 'react'

import '../../../syntax.css'

const html = `<span class="k">class</span> <span class="nc">Add</span> <span class="o">&lt;</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">Command</span>
  <span class="n">inputs</span> <span class="k">do</span>
    <span class="n">operand1</span> <span class="ss">:integer</span><span class="p">,</span> <span class="ss">:required</span>
    <span class="n">operand2</span> <span class="ss">:integer</span><span class="p">,</span> <span class="ss">:required</span>
  <span class="k">end</span>

  <span class="n">result</span> <span class="ss">:integer</span>

  <span class="k">def</span> <span class="nf">execute</span>
    <span class="n">add_operands</span>
  <span class="k">end</span>

  <span class="nb">attr_accessor</span> <span class="ss">:sum</span>

  <span class="k">def</span> <span class="nf">add_operands</span>
    <span class="nb">self</span><span class="p">.</span><span class="nf">sum</span> <span class="o">=</span> <span class="n">operand1</span> <span class="o">+</span> <span class="n">operand2</span>
  <span class="k">end</span>
<span class="k">end</span>`

export default function RackConnectorCodeCommands () {
  return <pre><code dangerouslySetInnerHTML={{ __html: html }} /></pre>
}
