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
    
    let n2 = Math.floor(Math.random()*3 + 3);
    let arr = [];
    for (let j = 0; j < n2; j ++) {
      arr.push(Random.cparagraph(1, 3))
    }

    let points = [];
    switch (n2) {
      case 3:
        points = [0, 7, 16];
        break;
      case 4:
        points = [0, 6, 12, 18];
        break;
      case 5:
        points = [0, 5, 10, 15, 20];
        break;
      default:
        break;
    }

    let o = {
      image: `https://miniapi.yvshare.cn/images/videos/${Random.integer(0, 249)}.png`,
      title: Random.ctitle(3, 6),
      voice: `https://miniapi.yvshare.cn/keep/audios/test.mp3`,
	    contents: arr,
      points: points
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

router.post('/test', (req, res, next) => {
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

router.post('/mind-maps', (req, res, next) => {
  let data = [];

  let n1 = Math.floor(Math.random()*3 + 1);

  for (let i = 0; i < n1; i ++) {

    let n2 = Math.floor(Math.random()*4 + 4);
    let arr2 = [];
    for (let j = 0; j < n2; j ++) {
      let o2 = Mock.mock({
        "type": 'image',
        "question_voice": `https://miniapi.yvshare.cn/keep/audios/${Random.integer(1, 3)}.mp3`,
        "analysis_voice": `https://miniapi.yvshare.cn/keep/audios/${Random.integer(1, 3)}.mp3`,
      });

      if (j === 0) {
        o2.level = 'center';
      } else {
        o2.level = 'branch';
      }

      let n3 = Math.floor(Math.random()*3 + 3);
      let options = [];
      for (let k = 0; k < n3; k ++) {
        let o3 = Mock.mock({
          "option": `https://miniapi.yvshare.cn/images/videos/${Random.integer(0, 249)}.png`,
          "title": Random.ctitle(3, 6)
        });
        options.push(o3);
      }
      o2.options = options;

      o2.answers = [Random.integer(1, n3)];

      arr2.push(o2);
    }

    data.push(arr2);
  }

  res.send({
    code: 200,
    data: data,
    message: 'success',
    timestamp: + new Date()
  });
})

// 生成机器人
let generateNpc = () => {
  let npc = [];

  for (let i = 0; i < 3; i ++) {
    let o = {
      name: Random.ctitle(2, 5),
      avatar: `https://miniapi.yvshare.cn/images/videos/${Random.integer(0, 249)}.png`
    }

    npc.push(o);
  }

  return npc;
};

router.post('/quiz', (req, res, next) => {
  let data = [];

  // let n1 = Math.floor(Math.random()*3 + 4);
  let n1 = 5;

  let npc = generateNpc();
  for (let i = 0; i < n1; i ++) {
    let obj = {};

    let level = i > 2 ? 'advanced' : 'base';
    let question_text = Random.cparagraph(1, 2);
    let question_voice = `https://miniapi.yvshare.cn/keep/audios/${Random.integer(1, 3)}.mp3`;
    let options = [];
    let answers = [Math.floor(Math.random()*3)];
    let analysis = Random.cparagraph(1, 3);
    let desc = Random.cparagraph(1, 3);

    for (let j = 0; j < 3; j ++) {
      let _j = j;
      ++ _j;

      let text = `${_j}. ${Random.csentence(5, 10)}`;
      options.push(text);
    }

    for (let k = 0; k < npc.length; k ++) {
      let item = npc[k]; // {}

      item.speed = Random.integer(6, 12);
      item.rate = Random.integer(15, 90);

      if (i === 0) {
        if (level === 'base') {
          // item.rate = Random.integer(75, 90);
          // item.speed = Random.integer(25, 35);
        } else {
          // item.rate = Random.integer(60, 75);
          // item.speed = Random.integer(25, 35)*1.5;
        }
      } else if (i === 1) {
        if (level === 'base') {
          // item.rate = Random.integer(55, 70);
          // item.speed = Random.integer(36, 45);
        } else {
          // item.rate = Random.integer(40, 55);
          // item.speed = Random.integer(36, 45)*1.5;
        }
      } else {
        if (level === 'base') {
          // item.rate = Random.integer(30, 50);
          // item.speed = Random.integer(46, 55);
        } else {
          // item.rate = Random.integer(15, 35);
          // item.speed = Random.integer(46, 55)*1.5;
        }
      }
    }

    obj = { level, question_text, question_voice, options, answers, analysis, desc, npc };

    data.push(obj);
  }

  res.send({
    code: 200,
    data: data,
    message: 'success',
    timestamp: +new Date()
  });
});

router.post('/get-npc', (req, res, next) => {
  let data = [];

  let npc = generateNpc();

  for (let i = 0; i < 5; i ++) {
    let arr = [];
    
    for (let k = 0; k < npc.length; k ++) {
      let item = npc[k]; // {}

      item.speed = Random.integer(6, 12);
      item.rate = Random.integer(35, 90);

      arr.push(item);
    }

    data.push(arr);
  }

  res.send({
    code: 200,
    data: data,
    message: 'success',
    timestamp: + new Date()
  });
});


module.exports = router;
