const express = require('express');
const router = express.Router();

router.post('/v-1111', (req, res, next) => {
  res.send({
    code: 0,
    data: {
      remaining_time: 2342167,
      banner_img: "banner_1",
      border_img: "border_1",
      tag_img: "tag_1",
      is_activity_product: 1
    },
    message: 'success',
    timestamp: + new Date()
  })
})

module.exports = router
