import React from 'react'

import '../syntax.css'

const html = `<span class="k">class</span> <span class="nc">Greet</span> <span class="o">&lt;</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">Command</span>
  <span class="nf">inputs</span> <span class="p">{</span> <span class="nf">who</span> <span class="ss">:string</span><span class="p">,</span> <span class="ss">default: </span><span class="s2">"World"</span> <span class="p">}</span>
  <span class="nf">result</span> <span class="ss">:string</span>

  <span class="k">def</span> <span class="nf">execute</span>
    <span class="s2">"Hello, </span><span class="si">#{</span><span class="nf">who</span><span class="si">}</span><span class="s2">!"</span>
  <span class="k">end</span>
<span class="k">end</span>

<span class="c1"># using .run!</span>
<span class="nb">puts</span> <span class="no">Greet</span><span class="p">.</span><span class="nf">run!</span>
<span class="nb">puts</span> <span class="no">Greet</span><span class="p">.</span><span class="nf">run!</span><span class="p">(</span><span class="ss">who: </span><span class="s2">"Fumiko"</span><span class="p">)</span>

<span class="c1"># using .run</span>
<span class="n">outcome</span> <span class="o">=</span> <span class="no">Greet</span><span class="p">.</span><span class="nf">run</span><span class="p">(</span><span class="ss">who: </span><span class="s2">"Barbara"</span><span class="p">)</span>
<span class="nb">puts</span> <span class="n">outcome</span><span class="p">.</span><span class="nf">success?</span> <span class="o">?</span> <span class="n">outcome</span><span class="p">.</span><span class="nf">result</span> <span class="o">:</span> <span class="n">outcome</span><span class="p">.</span><span class="nf">errors_hash</span>

<span class="c1"># using .new #run</span>
<span class="n">command</span> <span class="o">=</span> <span class="no">Greet</span><span class="p">.</span><span class="nf">new</span><span class="p">(</span><span class="ss">who: </span><span class="s2">"Basil"</span><span class="p">)</span>
<span class="n">outcome</span> <span class="o">=</span> <span class="n">command</span><span class="p">.</span><span class="nf">run</span>
<span class="nb">puts</span> <span class="n">outcome</span><span class="p">.</span><span class="nf">success?</span> <span class="o">?</span> <span class="n">outcome</span><span class="p">.</span><span class="nf">result</span> <span class="o">:</span> <span class="n">outcome</span><span class="p">.</span><span class="nf">errors_hash</span>
`

export default function SimpleCommandCode () {
  return <pre><code dangerouslySetInnerHTML={{ __html: html }} /></pre>
}
