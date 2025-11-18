export default `$ curl 'http://localhost:3000/run/CreateCapybara?name=Basil&nickname=baz&age=100'
{"name":"Basil","nickname":"baz","age":100,"id":4}
$ curl http://localhost:3000/run/FindCapybara?id=4
{"name":"Basil","nickname":"baz","age":100,"id":4}
$ curl http://localhost:3000/run/IncrementAge?capybara=4
{"id":4,"name":"Basil","nickname":"baz","age":101}
$ curl http://localhost:3000/run/FindCapybara?id=4
{"id":4,"name":"Basil","nickname":"baz","age":101}`
