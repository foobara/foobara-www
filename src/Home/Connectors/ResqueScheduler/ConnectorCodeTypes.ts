export default `<span class="k">class</span> <span class="nc">Capybara</span> <span class="o">&lt;</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">Entity</span>
  <span class="n">description</span> <span class="s2">"A giant semi-aquatic rodent"</span>

  <span class="n">attributes</span> <span class="k">do</span>
    <span class="nb">id</span> <span class="ss">:integer</span>
    <span class="nb">name</span> <span class="ss">:string</span><span class="p">,</span> <span class="ss">:required</span><span class="p">,</span> <span class="s2">"Official name"</span>
    <span class="n">nickname</span> <span class="ss">:string</span><span class="p">,</span> <span class="s2">"Informal name for friends"</span>
    <span class="n">age</span> <span class="ss">:integer</span><span class="p">,</span> <span class="ss">:required</span><span class="p">,</span> <span class="s2">"The number of times this capybara has gone around the sun"</span>
  <span class="k">end</span>

  <span class="n">primary_key</span> <span class="ss">:id</span>
<span class="k">end</span>`
