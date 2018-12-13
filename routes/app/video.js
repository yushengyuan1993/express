var express = require('express');
var router = express.Router();

var tv = require('../../public/js/data/top_20_tv.json')
var film = require('../../public/js/data/top_15_films.json')

/* POST */
router.post('/get-tv', function(req, res, next) {
  res.send( tv )
})

router.post('/get-film', function(req, res, next) {
  res.send( film )
})

module.exports = router;
