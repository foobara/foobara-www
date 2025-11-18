export default `<span class="k">class</span> <span class="nc">CreateCapybara</span> <span class="o">&lt;</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">Command</span>
  <span class="nf">description</span> <span class="s2">"Creates a Capybara record"</span>

  <span class="nf">inputs</span> <span class="no">Capybara</span><span class="p">.</span><span class="nf">attributes_for_create</span>
  <span class="nf">result</span> <span class="no">Capybara</span><span class="p">,</span> <span class="ss">description: </span><span class="s2">"The freshly created Capybara record"</span>

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
  <span class="nf">description</span> <span class="s2">"Updates a Capybara record"</span>

  <span class="nf">inputs</span> <span class="no">Capybara</span><span class="p">.</span><span class="nf">attributes_for_update</span>
  <span class="nf">result</span> <span class="no">Capybara</span><span class="p">,</span> <span class="ss">description: </span><span class="s2">"The updated Capybara record"</span>

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
  <span class="nf">description</span> <span class="s2">"Returns all Capybara records"</span>

  <span class="nf">result</span> <span class="p">[</span><span class="no">Capybara</span><span class="p">],</span> <span class="ss">description: </span><span class="s2">"All of the Capybara records there are!"</span>

  <span class="k">def</span> <span class="nf">execute</span>
    <span class="nf">find_all_capybaras</span>
  <span class="k">end</span>

  <span class="k">def</span> <span class="nf">find_all_capybaras</span>
    <span class="no">Capybara</span><span class="p">.</span><span class="nf">all</span>
  <span class="k">end</span>
<span class="k">end</span>

<span class="k">class</span> <span class="nc">DeleteAllCapybaras</span> <span class="o">&lt;</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">Command</span>
  <span class="nf">description</span> <span class="s2">"Deletes all Capybara records"</span>

  <span class="nf">depends_on_entity</span> <span class="no">Capybara</span>

  <span class="k">def</span> <span class="nf">execute</span>
    <span class="nf">delete_all</span>
    <span class="kp">nil</span>
  <span class="k">end</span>

  <span class="k">def</span> <span class="nf">delete_all</span>
    <span class="no">FindAllCapybaras</span><span class="p">.</span><span class="nf">run!</span><span class="p">.</span><span class="nf">each</span><span class="p">(</span><span class="o">&amp;</span><span class="ss">:hard_delete!</span><span class="p">)</span>
  <span class="k">end</span>
<span class="k">end</span>`
