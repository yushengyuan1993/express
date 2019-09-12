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

router.post('/happy-read', (req, res, next) => {
  let data = [];

  let n1 = Math.floor(Math.random()*4 + 3);

  for (let i = 0; i < n1; i ++) {
    // let contents = [];
    // let n2 = Math.floor(Math.random()*2 + 1);
    // for (let j = 0; j < n2; j ++) {
    //   contents.push(Random.cparagraph(2));
    // }
	
	let arr = Mock.mock({
		"contents|1-3": [
			'山养场，三个饲养场的。'
		]
	});
	
    let o = {
      image: `https://miniapi.yvshare.cn/images/videos/${Random.integer(0, 249)}.png`,
      title: Random.ctitle(3, 6),
      // voice: `https://miniapi.yvshare.cn/keep/audios/${Random.integer(1, 3)}.mp3`,
      voice: `https://miniapi.yvshare.cn/keep/audios/3.mp3`,
      //contents: [
      //  '山养场，三个饲养场的。',
      //  '场主经营得很不错，他场。'
      //],
	  contents: arr.contents
      points: [0, 500, 800, 1200, 1600, 2000, 2500, 2900, 3400, 3800, 4300, 4800, 5200, 5600, 6000, 6500, 6900, 7400, 7900, 8400, 8900, 9300, 9700]
    }

    data.push(o);
  }

  res.send({
    code: 200,
    data: data,
    message: 'success',
    timestamp: +new Date()
  })
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


module.exports = router;
