/**
 * 数据转换
 * 
 */
var fs = require('fs');

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
    let index = data.start + i;
    let src = index + '.png';
  
    data.subjects[i].cover = src;

    delete data.subjects[i].images;
    delete data.subjects[i].alt;

    // casts
    for (let m = 0; m < data.subjects[i].casts.length; m ++) {
      let src = data.subjects[i].casts[m].id + '.jpg';

      data.subjects[i].casts[m].avatar = src;

      delete data.subjects[i].casts[m].alt;
    }

    // directors
    for (let n = 0; n < data.subjects[i].directors.length; n ++) {
      let src = data.subjects[i].directors[n].id + '.jpg';

      data.subjects[i].directors[n].avatar = src;

      delete data.subjects[i].directors[n].alt;
      delete data.subjects[i].directors[n].avatars;
    }
  }

  data = JSON.stringify(data);
  fs.writeFile('./public/data/200_films_top250.json', data, 'utf-8', err => {
    if (err) {
      console.error(err);
    }

    console.log('write success');
  })
})
