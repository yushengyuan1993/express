var express = require('express')
var router = express.Router()

var data = require('../public/js/data/test.json')

var book = require('../public/js/data/top_20_tv.json')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource')
})

router.get('/hi', function(req, res, next) {
  // var str = JSON.stringify(data)
  // res.send(JSON.stringify(data))
  res.render('users', { user: data })
})

router.post('/testpost', function(req, res, next) {
  var obj = data
  res.send( obj )
})

router.post('/get-book', function(req, res, next) {
  var obj = book
  res.send( obj )
})

module.exports = router
