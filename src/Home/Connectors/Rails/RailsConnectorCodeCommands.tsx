import React from 'react'

import '../../../syntax.css'

const html = `<span class="k">class</span> <span class="nc">CreateCapybara</span> <span class="o">&lt;</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">Command</span>
  <span class="nf">description</span> <span class="s2">"Creates a giant semi-aquatic rodent!"</span>

  <span class="nf">inputs</span> <span class="no">Capybara</span><span class="p">.</span><span class="nf">attributes_for_create</span>
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

<span class="k">class</span> <span class="nc">UpdateCapybara</span> <span class="o">&lt;</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">Command</span>
  <span class="nf">inputs</span> <span class="no">Capybara</span><span class="p">.</span><span class="nf">attributes_for_update</span>
  <span class="nf">result</span> <span class="no">Capybara</span>

  <span class="k">def</span> <span class="nf">execute</span>
    <span class="nf">load_capybara</span>
    <span class="nf">update_capybara</span>

    <span class="nf">capybara</span>
  <span class="k">end</span>

  <span class="nb">attr_accessor</span> <span class="ss">:capybara</span>

  <span class="k">def</span> <span class="nf">load_capybara</span>
    <span class="k-self">self</span><span class="p">.</span><span class="nf">capybara</span> <span class="o">=</span> <span class="no">Capybara</span><span class="p">.</span><span class="nf">load</span><span class="p">(</span><span class="nb">id</span><span class="p">)</span>
  <span class="k">end</span>

  <span class="k">def</span> <span class="nf">update_capybara</span>
    <span class="nf">capybara</span><span class="p">.</span><span class="nf">update</span><span class="p">(</span><span class="nf">inputs</span><span class="p">)</span>
  <span class="k">end</span>
<span class="k">end</span>

<span class="k">class</span> <span class="nc">FindAllCapybaras</span> <span class="o">&lt;</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">Command</span>
  <span class="nf">result</span> <span class="p">[</span><span class="no">Capybara</span><span class="p">]</span>

  <span class="k">def</span> <span class="nf">execute</span>
    <span class="nf">find_all_capybaras</span>
  <span class="k">end</span>

  <span class="k">def</span> <span class="nf">find_all_capybaras</span>
    <span class="no">Capybara</span><span class="p">.</span><span class="nf">all</span>
  <span class="k">end</span>
<span class="k">end</span>`

export default function RailsConnectorCodeCommands () {
  return <pre><code dangerouslySetInnerHTML={{ __html: html }} /></pre>
}
