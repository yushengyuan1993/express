var express = require('express');
var router = express.Router();

var book = require('../../public/js/data/top_15_books.json')

/* POST */
router.post('/get-book', function(req, res, next) {
  res.send( book )
})

module.exports = router;
