export default `<span class="nb">require</span> <span class="s2">"foobara/anthropic_api"</span> <span class="k">if</span> <span class="no">ENV</span><span class="p">.</span><span class="nf">key?</span><span class="p">(</span><span class="s2">"ANTHROPIC_API_KEY"</span><span class="p">)</span>
<span class="nb">require</span> <span class="s2">"foobara/open_ai_api"</span> <span class="k">if</span> <span class="no">ENV</span><span class="p">.</span><span class="nf">key?</span><span class="p">(</span><span class="s2">"OPENAI_API_KEY"</span><span class="p">)</span>
<span class="nb">require</span> <span class="s2">"foobara/ollama_api"</span> <span class="k">if</span> <span class="no">ENV</span><span class="p">.</span><span class="nf">key?</span><span class="p">(</span><span class="s2">"OLLAMA_API_URL"</span><span class="p">)</span>

<span class="nb">require_relative</span> <span class="s2">"capybaras"</span>
<span class="nb">require</span> <span class="s2">"foobara/agent"</span>

<span class="n">llm_model</span> <span class="o">=</span> <span class="s2">"claude-3-7-sonnet-20250219"</span>
<span class="c1"># llm_model = "qwen3-coder:30b"</span>
<span class="c1"># llm_model = "o3"</span>

<span class="n">capy_agent</span> <span class="o">=</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">Agent</span><span class="p">.</span><span class="nf">new</span><span class="p">(</span>
  <span class="ss">agent_name: </span><span class="s2">"CapyAgent"</span><span class="p">,</span>
  <span class="ss">command_classes: </span><span class="p">[</span><span class="no">FindAllCapybaras</span><span class="p">,</span> <span class="no">UpdateCapybara</span><span class="p">],</span>
  <span class="n">llm_model</span><span class="p">:,</span>
  <span class="ss">result_type: </span><span class="no">Capybara</span><span class="p">,</span>
  <span class="ss">verbose: </span><span class="kp">true</span>
<span class="p">)</span>

<span class="k">def</span> <span class="nf">handle_outcome</span><span class="p">(</span><span class="n">outcome</span><span class="p">)</span>
  <span class="nb">puts</span>
  <span class="k">if</span> <span class="n">outcome</span><span class="p">.</span><span class="nf">success?</span>
    <span class="n">capy</span> <span class="o">=</span> <span class="n">outcome</span><span class="p">.</span><span class="nf">result</span><span class="p">[</span><span class="ss">:result_data</span><span class="p">]</span>
    <span class="nb">puts</span> <span class="s2">"Agent returned </span><span class="si">#{</span><span class="n">capy</span><span class="p">.</span><span class="nf">name</span><span class="si">}</span><span class="s2"> who now has a year_of_birth of </span><span class="si">#{</span><span class="n">capy</span><span class="p">.</span><span class="nf">year_of_birth</span><span class="si">}</span><span class="s2">"</span>
    <span class="nb">puts</span> <span class="s2">"Message from agent: </span><span class="si">#{</span><span class="n">outcome</span><span class="p">.</span><span class="nf">result</span><span class="p">[</span><span class="ss">:message_to_user</span><span class="p">]</span><span class="si">}</span><span class="s2">"</span>
    <span class="nb">puts</span>
  <span class="k">else</span>
    <span class="nb">puts</span> <span class="n">outcome</span><span class="p">.</span><span class="nf">errors_sentence</span>
    <span class="nb">puts</span>
    <span class="nb">exit</span> <span class="mi">1</span>
  <span class="k">end</span>
<span class="k">end</span>

<span class="n">goal</span> <span class="o">=</span> <span class="s2">"There is a capybara with a bad year of birth. Can you find and fix the bad record? Thanks!"</span>
<span class="nb">puts</span> <span class="s2">"To agent: </span><span class="si">#{</span><span class="n">goal</span><span class="si">}</span><span class="s2">"</span>
<span class="n">outcome</span> <span class="o">=</span> <span class="n">capy_agent</span><span class="p">.</span><span class="nf">accomplish_goal</span><span class="p">(</span><span class="n">goal</span><span class="p">)</span>
<span class="nf">handle_outcome</span><span class="p">(</span><span class="n">outcome</span><span class="p">)</span>

<span class="n">goal</span> <span class="o">=</span> <span class="s2">"Thank you so much! Can you set it back so that I can do the demo over again? Thanks!"</span>
<span class="nb">puts</span> <span class="s2">"To agent: </span><span class="si">#{</span><span class="n">goal</span><span class="si">}</span><span class="s2">"</span>
<span class="n">outcome</span> <span class="o">=</span> <span class="n">capy_agent</span><span class="p">.</span><span class="nf">accomplish_goal</span><span class="p">(</span><span class="n">goal</span><span class="p">)</span>
<span class="nf">handle_outcome</span><span class="p">(</span><span class="n">outcome</span><span class="p">)</span>`
