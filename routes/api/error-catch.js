const express = require('express');
const router = express.Router();

router.post('/catch', (req, res, next) => {

  console.log(req);

  res.send({
    code: 0,
    data: {},
    message: 'success',
    timestamp: + new Date()
  })
})

module.exports = router
