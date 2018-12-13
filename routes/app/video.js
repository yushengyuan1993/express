var app = require('express')();

var tv = require('../../public/js/data/top_20_tv.json');
var film = require('../../public/js/data/top_15_films.json');

/* POST */
app.post('/get-tv', function(req, res, next) {
  res.send( tv );
})

app.post('/get-film', function(req, res, next) {
  // res.send( film );
  var start = req.body.start;
  var count = req.body.count;

  var data = film[0].subjects.slice(start, count);
  res.send(data);
})

// 下载文件
app.post('/dl', function(req, res, next) {
  // res.send('dl');

  console.log('yushengyuan11');
  next();
}, function (req, res, next) {
  // app.get('https://movie.douban.com/j/search_subjects?type=tv&tag=%E7%83%AD%E9%97%A8&sort=', function (req, res, next) {
  //   console.log('yushengyuan22');
  // })
  console.log('yushengyuan22');

})

module.exports = app;
