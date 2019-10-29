const express = require('express');
const router = express.Router();

router.post('/double-eleven', (req, res, next) => {
  res.send({
    code: 0,
    data: {
      name: 'ysy'
    },
    message: 'success',
    timestamp: + new Date()
  })
})

module.exports = router
