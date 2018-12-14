var app = require('express')();
var http = require('http');
var cheerio = require('cheerio');
var fs = require('fs');
var request = require('request');

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('cheerio', { title: '简单nodejs爬虫' });
});

app.post('/getJobs', function(req, res, next) { // 浏览器端发来get请求
  var chunks = [];
  var size = 0;
  var url = 'http://api.douban.com/v2/movie/top250?start=0&count=50';

  http.get(url, function (res) {
    res.on('data', function (chunk) {
      chunks.push(chunk);

      size += chunk.length;
    })
    res.on('end', function () {
      // console.log(chunks);

      var data = Buffer.concat(chunks, size);
      // console.log(data)

      var str = data.toString();
      // console.log(str);

      fs.writeFile('./public/data/test.json', str, function (err) {
        if (err) {
          console.log('error');
        } else {
          console.log('success');

          downloadImage(str);
        }
      })

    })
  });
});

function downloadImage(data) {
  data = JSON.parse(data);
  console.log(data.subjects.length);

  var subjects = data.subjects;
  for (var i = 0; i < subjects.length; i ++) {
    var src = subjects[i].images.small;

    var writeStream = fs.createWriteStream('./public/images/videos/' + i + '_' + subjects[i].title + '.png');
    var readStream = request(src);
    readStream.pipe(writeStream);

    readStream.on('end', function() {
      console.log(i + ' 文件下载成功');
    });
    readStream.on('error', function() {
      console.log("错误信息:" + err)
    })
    writeStream.on("finish", function() {
      console.log(i + " 文件写入成功");
      writeStream.end();
    });
  }
}

module.exports = app;