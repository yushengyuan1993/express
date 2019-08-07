var express = require('express');
var router = express.Router();

/* POST */
router.post('/get-keep', function(req, res, next) {
  res.send({
    video_id: '5285890790782139610',
    video_src: 'http://1254368367.vod2.myqcloud.com/78d1c9ccvodgzp1254368367/ee77c7cf5285890790782139610/54JWtB6aah0A.mp4'
  })
})

module.exports = router;
