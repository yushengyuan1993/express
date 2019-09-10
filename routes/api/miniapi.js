const express = require('express');
const router = express.Router();
const Mock  = require('mockjs');
const { Random } = Mock;

router.post('/login', (req, res, next) => {
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

router.post('/small-classroom', (req, res, next) => {
  res.send({
    code: 200,
    data: {
      video_id: '5285890790782139610',
      video_src: 'http://1254368367.vod2.myqcloud.com/2cf96c74vodtransgzp1254368367/f7e1a4ec5285890784532365214/v.f40.mp4'
    },
    message: 'success',
    timestamp: + new Date()
  });
});

router.post('/course-list', (req, res, next) => {
  let referer = req.headers.referer;

  let data = [
    {
      title: '快乐阅读',
      status: 1,
      score: 2,
      icon: `${referer}images/keep/index/read.png`,
      link: '/pages/course/read/read/read',
    },
    {
      title: '思维导图',
      status: 1,
      score: 2,
      icon: `${referer}images/keep/index/mind-map.png`,
      link: '/pages/course/read/mind-map/mind-map',
    },
    {
      title: '阅读大闯关',
      status: 1,
      score: 3,
      icon: `${referer}images/keep/index/pk.png`,
      link: '/pages/course/read/pk/pk',
    },
    {
      title: '趣味小课堂',
      status: 0,
      score: 0,
      icon: `${referer}images/keep/index/class-room.png`,
      link: '/pages/course/read/class-room/class-room',
    }
  ];

  res.send({
    code: 200,
    data,
    message: 'success',
    timestamp: + new Date()
  });
});

router.post('/mind-maps', (req, res, next) => {
  let data = [];
  let n1 = Math.floor(Math.random()*4 + 3);
  for(let i = 0; i < n1; i ++) {
    let o1 = Mock.mock({
      "answerIndex|0-2": 2,
      "cover": `https://miniapi.yvshare.cn/images/videos/${Random.integer(0, 249)}.png`
    });

    let n2 = Math.floor(Math.random()*3 + 3);
    let arr2 = [];
    for (let j = 0; j < n2; j ++) {
      let o2 = Mock.mock({
        "title": Random.ctitle(3, 6),
        "img": `https://miniapi.yvshare.cn/images/videos/${Random.integer(0, 249)}.png`
      });

      arr2.push(o2);
    }

    o1.option = arr2;

    data.push(o1);
  }

  res.send({
    code: 200,
    data: data,
    message: 'success',
    timestamp: + new Date()
  });
});

router.post('/quiz', (req, res, next) => {
  res.send({
    code: 200,
    data: {
      video_id: '5285890790782139610',
      video_src: 'http://1254368367.vod2.myqcloud.com/2cf96c74vodtransgzp1254368367/f7e1a4ec5285890784532365214/v.f40.mp4'
    },
    message: 'success',
    timestamp: +new Date()
  });
});

router.post('/test', (req, res, next) => {
  let data = {
    img: `https://miniapi.yvshare.cn/images/videos/${Random.integer(0, 249)}.png`
  }

  res.send({
    code: 200,
    data: data,
    message: 'success',
    timestamp: +new Date()
  })
})

module.exports = router;
