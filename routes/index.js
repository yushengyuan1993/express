var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

// 晚上去吃啥
router.get('/home/index', (req, res, next) => {
  res.render('home/index');
});

module.exports = router;
