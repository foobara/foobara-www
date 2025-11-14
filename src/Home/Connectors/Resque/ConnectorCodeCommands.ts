export default `<span class="k">class</span> <span class="nc">CreateCapybara</span> <span class="o">&lt;</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">Command</span>
  <span class="n">description</span> <span class="s2">"Just creates a capybara!"</span>

  <span class="n">inputs</span> <span class="no">Capybara</span><span class="p">.</span><span class="nf">attributes_type</span>
  <span class="n">result</span> <span class="no">Capybara</span>

  <span class="k">def</span> <span class="nf">execute</span>
    <span class="n">create_capybara</span>

    <span class="n">capybara</span>
  <span class="k">end</span>

  <span class="nb">attr_accessor</span> <span class="ss">:capybara</span>

  <span class="k">def</span> <span class="nf">create_capybara</span>
    <span class="nb">self</span><span class="p">.</span><span class="nf">capybara</span> <span class="o">=</span> <span class="no">Capybara</span><span class="p">.</span><span class="nf">create</span><span class="p">(</span><span class="n">inputs</span><span class="p">)</span>
  <span class="k">end</span>
<span class="k">end</span>

<span class="k">class</span> <span class="nc">IncrementAge</span> <span class="o">&lt;</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">Command</span>
  <span class="n">description</span> <span class="s2">"A trip around the sun without dying!"</span>

  <span class="n">inputs</span> <span class="k">do</span>
    <span class="n">capybara</span> <span class="no">Capybara</span><span class="p">,</span> <span class="ss">:required</span>
  <span class="k">end</span>

  <span class="n">result</span> <span class="no">Capybara</span>

  <span class="k">def</span> <span class="nf">execute</span>
    <span class="n">increment_age</span>

    <span class="n">capybara</span>
  <span class="k">end</span>

  <span class="k">def</span> <span class="nf">increment_age</span>
    <span class="n">capybara</span><span class="p">.</span><span class="nf">age</span> <span class="o">+=</span> <span class="mi">1</span>
  <span class="k">end</span>
<span class="k">end</span>

<span class="k">class</span> <span class="nc">FindAllCapybaras</span> <span class="o">&lt;</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">Command</span>
  <span class="n">result</span> <span class="p">[</span><span class="no">Capybara</span><span class="p">]</span>

  <span class="k">def</span> <span class="nf">execute</span>
    <span class="n">find_all_capybaras</span>
  <span class="k">end</span>

  <span class="k">def</span> <span class="nf">find_all_capybaras</span>
    <span class="no">Capybara</span><span class="p">.</span><span class="nf">all</span>
  <span class="k">end</span>
<span class="k">end</span>`
