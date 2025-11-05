import React from 'react'

import '../syntax.css'

const html = `<span class="k">class</span> <span class="nc">Capybara</span> <span class="o">&lt;</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">Entity</span>
  <span class="nf">attributes</span> <span class="k">do</span>
    <span class="nb">id</span> <span class="ss">:integer</span>
    <span class="nb">name</span> <span class="ss">:string</span><span class="p">,</span> <span class="ss">:required</span><span class="p">,</span> <span class="s2">"Official name"</span>
    <span class="nf">nickname</span> <span class="ss">:string</span><span class="p">,</span> <span class="s2">"Informal name for friends"</span>
    <span class="nf">age</span> <span class="ss">:integer</span><span class="p">,</span> <span class="ss">:required</span><span class="p">,</span>
        <span class="s2">"The number of times this capybara has gone around the sun"</span>
  <span class="k">end</span>

  <span class="nf">primary_key</span> <span class="ss">:id</span>
<span class="k">end</span>

<span class="k">class</span> <span class="nc">CreateCapybara</span> <span class="o">&lt;</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">Command</span>
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

<span class="n">command_connector</span> <span class="o">=</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">CommandConnectors</span><span class="o">::</span><span class="no">ShCliConnector</span><span class="p">.</span><span class="nf">new</span>

<span class="n">command_connector</span><span class="p">.</span><span class="nf">connect</span><span class="p">(</span><span class="no">CreateCapybara</span><span class="p">)</span>
<span class="n">command_connector</span><span class="p">.</span><span class="nf">connect</span><span class="p">(</span><span class="no">IncrementAge</span><span class="p">)</span>
<span class="n">command_connector</span><span class="p">.</span><span class="nf">connect</span><span class="p">(</span><span class="no">FindCapybara</span><span class="p">)</span>

<span class="n">command_connector</span><span class="p">.</span><span class="nf">run</span><span class="p">(</span><span class="no">ARGV</span><span class="p">)</span>
`

export default function CliConnectorCode () {
  return <pre><code dangerouslySetInnerHTML={{ __html: html }} /></pre>
}
