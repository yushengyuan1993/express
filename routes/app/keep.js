var express = require('express');
var router = express.Router();

/* POST */
let data = {
  code: 0,
  message: 'success',
  data: {
    video_id: '5285890790782139610',
    video_src: 'http://1254368367.vod2.myqcloud.com/2cf96c74vodtransgzp1254368367/f7e1a4ec5285890784532365214/v.f40.mp4'
  },
  timestamp: +new Date()
}
router.post('/get-keep', function(req, res, next) {
  res.send(data)
})

module.exports = router;