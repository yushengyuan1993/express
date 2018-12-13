var redis = require('redis')
var client = redis.createClient('6379', '127.0.0.1')

await client.set('name', 'yushengyuan', function (error, res) {
	console.log(error)
	console.log(res)

  client.get('name', function(error, res) {
    console.log(error, res)
      client.end(true)
  })

})
