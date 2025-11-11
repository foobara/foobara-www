export default `<span class="n">command_connector</span> <span class="o">=</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">CommandConnectors</span><span class="o">::</span><span class="no">ShCliConnector</span><span class="p">.</span><span class="nf">new</span>

<span class="n">command_connector</span><span class="p">.</span><span class="nf">connect</span><span class="p">(</span><span class="no">CreateCapybara</span><span class="p">)</span>
<span class="n">command_connector</span><span class="p">.</span><span class="nf">connect</span><span class="p">(</span><span class="no">IncrementAge</span><span class="p">)</span>
<span class="n">command_connector</span><span class="p">.</span><span class="nf">connect</span><span class="p">(</span><span class="no">FindCapybara</span><span class="p">)</span>

<span class="n">command_connector</span><span class="p">.</span><span class="nf">run</span>`
