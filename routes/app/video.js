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

// 搜索
app.post('/search-film', function(req, res, next) {
  let title = req.body.title;
  
  let subjects = films_all.subjects;
  let arr = [];
  for (let i = 0, j = subjects.length; i < j; i ++) {
    if (subjects[i].title.includes(title)) {
      arr.push(subjects[i])
    } else {
      let casts = subjects[i].casts;
      let directors = subjects[i].directors;

      let arr2 = casts.concat(directors);

      for (let m = 0; m < arr2.length; m ++) {
        if (arr2[m].name.includes(title)) {
          arr.push(subjects[i])
          break
        }
      }
    }
  }
  res.send(arr);
})

module.exports = app;
