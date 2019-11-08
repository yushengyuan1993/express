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

router.post('/today-step', (req, res, next) => {
  console.log(req.body);

  res.send({
    code: 0,
    data: {
      add_carrot: 12,
      step_carrot: 12
    },
    message: 'success',
    timestamp: + new Date()
  })
})

router.post('/calendar', (req, res, next) => {
  console.log(req.body);

  res.send({
    code: 0,
    data: {},
    message: 'success',
    timestamp: + new Date()
  })
})

module.exports = router
