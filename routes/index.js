var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

// 晚上去吃啥
router.get('/home/index', (req, res, next) => {
  const n = Math.floor(Math.random() * (100) + 1);
  const f1 = '豆捞坊';
  const f2 = '风和日丽';
  const result = n > 50 ? f1 : f2;

  res.render('home/index', { title: result});
});

module.exports = router;
