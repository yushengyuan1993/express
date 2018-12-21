// 批量修改文件名

var fs = require('fs');

// 1. 获取图片src
var data = require('../public/data/200_films_top250.json');
var url = './public/data/200_films_top250.json';

console.log(data.count);

fs.readFile(url, 'utf-8', function (err, data) {
  if (err) {
    console.error(err);
  }

  data = JSON.parse(data);
  console.log(typeof data);

  for (let i = 0; i < data.subjects.length; i ++) {

    delete data.subjects[i].rating;
    delete data.subjects[i].genres;
    delete data.subjects[i].title;
    delete data.subjects[i].collect_count;
    delete data.subjects[i].original_title;
    delete data.subjects[i].subtype;
    delete data.subjects[i].year;
    delete data.subjects[i].id;
    delete data.subjects[i].cover;

    // casts
    for (let m = 0; m < data.subjects[i].casts.length; m ++) {
      let id = data.subjects[i].casts[m].id;

      if (id === null) {
        data.subjects[i].casts[m].id = '';
        data.subjects[i].casts[m].avatar = "";
      }
    }

    // directors
    for (let n = 0; n < data.subjects[i].directors.length; n ++) {
      let id = data.subjects[i].directors[n].id;

      if (id === null) {
        data.subjects[i].directors[n].id = '';
        data.subjects[i].directors[n].avatar = "";
      } else {
        let src = data.subjects[i].directors[n].small;

        if (src == null) {
          data.subjects[i].directors[n].avatar = ''
        } else {
          data.subjects[i].directors[n].avatar = src;
        }
      }
    }
  }

  data = JSON.stringify(data);
  fs.writeFile('./public/data/avatar/200_249.json', data, 'utf-8', err => {
    if (err) {
      console.error(err);
    }

    console.log('write success');
  })
})
