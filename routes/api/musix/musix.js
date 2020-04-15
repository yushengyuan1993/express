const express = require('express');
const router = express.Router();

const decode = require('./decode');

router.get('/decode', (req, res, next) => {
  const query = req.query.query;

  let _ = {
    code: 0,
    data: null,
    message: 'success',
    timestamp: + new Date()
  };

  if (query) {
    _.data = decode(query);
  } else {
    _.data.code = 500;
    _.data.message = 'fail';
  }

  res.send(_);
});

module.exports = router;
