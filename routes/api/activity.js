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

router.get('/get-exchange-gold-activity-info', (req, res, next) => {

  res.send({
    code: 0,
    data: {
      title: '笔笔有金币',
      description: '10元收益加赠300金币',
      gold: 233,
      rules: '',
      head_img: '/static/images/activity/activity_bg.png',
      begin_date: '2019-11-30 00:00:00',
      end_date: '2019-12-03 00:00:00',
      current_date: '2019-12-02 23:50:00',
      status: 'VALID',
      exchange_list: [
        {
          image: '/static/images/share.png',
          gold: 555,
          link: '#'
        },
        {
          image: '/static/images/share.png',
          gold: 555,
          link: '#'
        },
        {
          image: '/static/images/share.png',
          gold: 555,
          link: '#'
        }
      ]
    },
    message: 'success',
    timestamp: + new Date()
  })
})

router.get('/two-page-data', (req, res, next) => {
  
  res.send({
    code: 0,
    data: {
      url: "https://keep.kuaizaixuetang.com/dyy_product",
      banner: "http://public-1254368367.file.myqcloud.com/kms/2019-11-11/c70a5f3e-cd1f-4b56-98aa-b63265799d38.png",
      items: [
        {
          "title": "国学大语文1",
          "product_infos": [
            {
              "product_id": "3000039",
              "title": "《论语》专题课",
              "lesson_total": 21,
              "join_number": 12002,
              "image": "https://public-1254368367.file.myqcloud.com/kms/2019-07-31/2c559609-82ae-4399-8a00-bccf83808424.png",
              "origin_price": 59.90,
              "real_price": 11.80
            },
            {
              "product_id": "3000039",
              "title": "《论语》专题课",
              "lesson_total": 21,
              "join_number": 12002,
              "image": "https://public-1254368367.file.myqcloud.com/kms/2019-07-31/2c559609-82ae-4399-8a00-bccf83808424.png",
              "origin_price": 59.90,
              "real_price": 11.80
            }
          ]
        },
        {
          "title": "国学大语文2",
          "product_infos": [
            {
              "product_id": "3000039",
              "title": "《论语》专题课",
              "lesson_total": 21,
              "join_number": 12002,
              "image": "https://public-1254368367.file.myqcloud.com/kms/2019-07-31/2c559609-82ae-4399-8a00-bccf83808424.png",
              "origin_price": 59.90,
              "real_price": 11.80
            },
            {
              "product_id": "3000039",
              "title": "《论语》专题课",
              "lesson_total": 21,
              "join_number": 12002,
              "image": "https://public-1254368367.file.myqcloud.com/kms/2019-07-31/2c559609-82ae-4399-8a00-bccf83808424.png",
              "origin_price": 59.90,
              "real_price": 11.80
            },
            {
              "product_id": "3000039",
              "title": "《论语》专题课",
              "lesson_total": 21,
              "join_number": 12002,
              "image": "https://public-1254368367.file.myqcloud.com/kms/2019-07-31/2c559609-82ae-4399-8a00-bccf83808424.png",
              "origin_price": 59.90,
              "real_price": 11.80
            }
          ]
        },
      ]
    },
    message: 'success',
    timestamp: + new Date()
  })
})

router.get('/home-layout-activity-data', (req, res, next) => {
  res.send({
    code: 0,
    data: {
      background_image: "http://test-public-1254368367.file.myqcloud.com/kms/2019-09-24/311c3733-2a1c-4ed5-9b23-b97a69f07364.png",
      start_time: "2019-12-02 00:00:00",
      end_time: "2019-12-10 00:00:00",
      one_item: {
        image: "http://test-public-1254368367.file.myqcloud.com/kms/2019-09-24/311c3733-2a1c-4ed5-9b23-b97a69f07364.png",
        link: "http://www.baidu.com",
        product_id: 3000191,
        join_number: 493
      },
      two_item: [
        {
          image: "http://test-public-1254368367.file.myqcloud.com/kms/2019-09-24/311c3733-2a1c-4ed5-9b23-b97a69f07364.png",
          link: "http://www.baidu.com"
        },
        {
          image: "http://test-public-1254368367.file.myqcloud.com/kms/2019-09-24/311c3733-2a1c-4ed5-9b23-b97a69f07364.png",
          link: "http://www.baidu.com"
        }
      ],
      status: "VALID"
    },
    message: 'success',
    timestamp: + new Date()
  })
})

router.get('/eat', (req, res, next) => {
  const n = Math.floor(Math.random() * (100) + 1);
  const f1 = '豆捞坊';
  const f2 = '风和日丽';
  const result = n > 50 ? f1 : f2;
  const type = n > 50 ? 'f1' : 'f2';

  res.send({
    code: 0,
    data: {
      restaurant: result,
      type: type,
      r1: f1,
      r2: f2,
    },
    message: 'success',
    timestamp: + new Date()
  })
});

module.exports = router
