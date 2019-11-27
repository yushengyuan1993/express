const express = require('express');
const router = express.Router();

router.post('/catch', (req, res, next) => {

  console.log(req.body);

  res.send({
    code: 0,
    data: {
      name: 'yushare'
    },
    message: 'success',
    timestamp: + new Date()
  })
})

module.exports = router
