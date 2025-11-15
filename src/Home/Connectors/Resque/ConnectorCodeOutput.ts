export default `$ QUEUE=* VERBOSE=1 rake resque:work
*** Starting worker demo:29545:general
*** got: (Job{general} | Foobara::CommandConnectors::ResqueConnector::CommandJob | [{"command_name" => "IncrementAge", "inputs" => {"capybara" => 1}}])
*** done: (Job{general} | Foobara::CommandConnectors::ResqueConnector::CommandJob | [{"command_name" => "IncrementAge", "inputs" => {"capybara" => 1}}])
*** got: (Job{general} | Foobara::CommandConnectors::ResqueConnector::CommandJob | [{"command_name" => "IncrementAge", "inputs" => {"capybara" => 2}}])
*** done: (Job{general} | Foobara::CommandConnectors::ResqueConnector::CommandJob | [{"command_name" => "IncrementAge", "inputs" => {"capybara" => 2}}])
*** got: (Job{general} | Foobara::CommandConnectors::ResqueConnector::CommandJob | [{"command_name" => "IncrementAge", "inputs" => {"capybara" => 2}}])
*** done: (Job{general} | Foobara::CommandConnectors::ResqueConnector::CommandJob | [{"command_name" => "IncrementAge", "inputs" => {"capybara" => 2}}])
*** ^C Exiting...
$ ./capybaras-cli FindAllCapybaras
{
  id: 1,
  name: "Fumiko",
  nickname: "foo",
  age: 101
},
{
  id: 2,
  name: "Barbara",
  nickname: "bar",
  age: 102
}`
