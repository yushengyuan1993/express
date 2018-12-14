var app = require('express')();

var tv = require('../../public/js/data/top_20_tv.json');

var films_all = require('../../public/data/films_all.json');

/* POST */
app.post('/get-tv', function(req, res, next) {
  res.send( tv );
})

app.post('/get-film', function(req, res, next) {
  let start = req.body.start - 1;
  let count = req.body.count;

  let end = start + count;

  let data = films_all.subjects.slice(start, end);

  res.send(data);
})

module.exports = app;
