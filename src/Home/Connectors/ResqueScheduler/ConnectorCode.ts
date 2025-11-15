export default `<span class="nb">require_relative</span> <span class="s2">"part_5c_async_command_connector"</span>

<span class="nb">require</span> <span class="s2">"foobara/resque_scheduler_connector"</span>

<span class="n">cron_connector</span> <span class="o">=</span> <span class="no">Foobara</span><span class="o">::</span><span class="no">CommandConnectors</span><span class="o">::</span><span class="no">ResqueSchedulerConnector</span><span class="p">.</span><span class="nf">new</span>

<span class="n">cron_connector</span><span class="p">.</span><span class="nf">cron</span><span class="p">(</span>
  <span class="p">[</span>
    <span class="c1">#   ╭─Second (0-59)</span>
    <span class="c1">#   │ ╭─Minute (0-59)</span>
    <span class="c1">#   │ │ ╭─Hour (0-23)</span>
    <span class="c1">#   │ │ │ ╭─Day-of-Month (1-31)</span>
    <span class="c1">#   │ │ │ │ ╭─Month (1-12)</span>
    <span class="c1">#   │ │ │ │ │ ╭─Day-of-Week (0-6)</span>
    <span class="c1">#   │ │ │ │ │ │ ╭─Timezone</span>
    <span class="c1">#   │ │ │ │ │ │ │   ╭─Command,      ╭─Inputs</span>
    <span class="p">[</span><span class="s2">"*/5 * * * * *  "</span><span class="p">,</span> <span class="no">IncrementAge</span><span class="p">,</span> <span class="p">{</span> <span class="ss">capybara: </span><span class="mi">1</span> <span class="p">}]</span>
  <span class="p">]</span>
<span class="p">)</span>`
