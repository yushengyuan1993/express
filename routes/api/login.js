const express = require('express');
const router = express.Router();
const http = require('http');

/* GET home page. */
router.post('/login', function(req, res, next) {
  res.send({
    code: 200,
    data: {
      name: 'yushare',
      age: 18
    },
    message: 'success',
    timestamp: + new Date()
  });


});

module.exports = router;
