export default `$ ./capybaras-cli FindAllCapybaras
{
  id: 1,
  name: "Fumiko",
  nickname: "foo",
  age: 100
}
$ rake resque:scheduler
resque-scheduler: [INFO]: queueing Foobara::CommandConnectors::ResqueConnector::CommandJob (IncrementAge)
resque-scheduler: [INFO]: queueing Foobara::CommandConnectors::ResqueConnector::CommandJob (IncrementAge)
resque-scheduler: [INFO]: queueing Foobara::CommandConnectors::ResqueConnector::CommandJob (IncrementAge)
resque-scheduler: [INFO]: queueing Foobara::CommandConnectors::ResqueConnector::CommandJob (IncrementAge)
^C resque-scheduler: [INFO]: Got INT signal
resque-scheduler: [INFO]: Shutting down
$ ./capybaras-cli FindAllCapybaras
{
  id: 1,
  name: "Fumiko",
  nickname: "foo",
  age: 104
}`
