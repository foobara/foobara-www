import React from 'react'

import '../../../syntax.css'

const html = `<span class="k">class</span> <span class="nc">CreateCapybara</span> <span class="o">&lt;</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">Command</span>
  <span class="nf">description</span> <span class="s2">"Just creates a capybara!"</span>

  <span class="nf">inputs</span> <span class="no">Capybara</span><span class="p">.</span><span class="nf">attributes_type</span>
  <span class="nf">result</span> <span class="no">Capybara</span>

  <span class="k">def</span> <span class="nf">execute</span>
    <span class="nf">create_capybara</span>

    <span class="nf">capybara</span>
  <span class="k">end</span>

  <span class="nb">attr_accessor</span> <span class="ss">:capybara</span>

  <span class="k">def</span> <span class="nf">create_capybara</span>
    <span class="k-self">self</span><span class="p">.</span><span class="nf">capybara</span> <span class="o">=</span> <span class="no">Capybara</span><span class="p">.</span><span class="nf">create</span><span class="p">(</span><span class="nf">inputs</span><span class="p">)</span>
  <span class="k">end</span>
<span class="k">end</span>

<span class="k">class</span> <span class="nc">FindCapybara</span> <span class="o">&lt;</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">Command</span>
  <span class="nf">description</span> <span class="s2">"Just tell us who you want to find!"</span>

  <span class="nf">inputs</span> <span class="k">do</span>
    <span class="nb">id</span> <span class="no">Capybara</span><span class="p">.</span><span class="nf">primary_key_type</span><span class="p">,</span> <span class="ss">:required</span>
  <span class="k">end</span>

  <span class="nf">result</span> <span class="no">Capybara</span>

  <span class="k">def</span> <span class="nf">execute</span>
    <span class="nf">load_capybara</span>

    <span class="nf">capybara</span>
  <span class="k">end</span>

  <span class="nb">attr_accessor</span> <span class="ss">:capybara</span>

  <span class="k">def</span> <span class="nf">load_capybara</span>
    <span class="k-self">self</span><span class="p">.</span><span class="nf">capybara</span> <span class="o">=</span> <span class="no">Capybara</span><span class="p">.</span><span class="nf">load</span><span class="p">(</span><span class="nb">id</span><span class="p">)</span>
  <span class="k">end</span>
<span class="k">end</span>

<span class="k">class</span> <span class="nc">IncrementAge</span> <span class="o">&lt;</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">Command</span>
  <span class="nf">description</span> <span class="s2">"A trip around the sun!"</span>

  <span class="nf">inputs</span> <span class="k">do</span>
    <span class="nf">capybara</span> <span class="no">Capybara</span><span class="p">,</span> <span class="ss">:required</span>
  <span class="k">end</span>

  <span class="nf">result</span> <span class="no">Capybara</span>

  <span class="k">def</span> <span class="nf">execute</span>
    <span class="nf">increment_age</span>

    <span class="nf">capybara</span>
  <span class="k">end</span>

  <span class="k">def</span> <span class="nf">increment_age</span>
    <span class="nf">capybara</span><span class="p">.</span><span class="nf">age</span> <span class="o">+=</span> <span class="mi">1</span>
  <span class="k">end</span>
<span class="k">end</span>
`

export default function CliConnectorCodeCommands () {
  return <pre><code dangerouslySetInnerHTML={{ __html: html }} /></pre>
}
