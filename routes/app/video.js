var express = require('express');
var router = express.Router();

var tv = require('../../public/js/data/top_20_tv.json')

/* POST */
router.post('/get-tv', function(req, res, next) {
  res.send( tv )
})

module.exports = router;
