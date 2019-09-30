const express = require('express');
const router = express.Router();
const Mock  = require('mockjs');
const { Random } = Mock;
const config = require('./config');

router.post('/mini-app-login', (req, res, next) => {
  res.send({
    code: 0,
    data: config.userinfo,
    message: 'success',
    timestamp: + new Date()
  });
});

const generateHappyReadData = () => {
  let data = [];

  let n1 = Math.floor(Math.random()*4 + 6);

  for (let i = 0; i < n1; i ++) {
    
    let n2 = Math.floor(Math.random()*3 + 3);
    let contents = [];
    for (let j = 0; j < n2; j ++) {
      contents.push(Random.cparagraph(1, 3))
    }

    let node_times = [];
    switch (n2) {
      case 3:
        node_times = [0, 7, 16];
        break;
      case 4:
        node_times = [0, 6, 12, 18];
        break;
      case 5:
        node_times = [0, 5, 10, 15, 20];
        break;
      default:
        break;
    }

    let title = '';
    if (i === 0 || i === 3) {
      title = Random.ctitle(3, 6);
      node_times[0] = 2;
    }

    let footer = '';
    if (i === 2 || i === (n1 - 1)) {
      footer = '—— 《' + Random.ctitle(3, 6) + '》';
    }

    let o = {
      title,
	    contents,
      node_times,
      footer,
      image: `https://miniapi.yvshare.cn/images/videos/${Random.integer(0, 249)}.png`,
      voice: `https://miniapi.yvshare.cn/keep/audios/test.mp3`
    }

    data.push(o);
  }

  return data;
}
router.post('/happy-read', (req, res, next) => {

  let data = generateHappyReadData();

  res.send({
    code: 0,
    data: data,
    message: 'success',
    timestamp: +new Date()
  })
});

const generateSmallClassRoom = (req) => {

  let _type = req ? req.body.type : 'read';

  let video = _type === 'read' ? 'https://miniapi.yvshare.cn/videos/3.mp4' : 'http://1254368367.vod2.myqcloud.com/2cf96c74vodtransgzp1254368367/f7e1a4ec5285890784532365214/v.f40.mp4';

  let contents = [];
  for (let i = 0; i < Random.integer(4, 8); i ++) {
    contents.push(Random.cparagraph(1, 3));
  }

  let mind_map_images = [];
  for (let i = 0; i < Random.integer(1, 3); i ++) {
    mind_map_images.push(`https://miniapi.yvshare.cn/images/videos/${Random.integer(0, 249)}.png`);
  }

  let questions = [];
  let n2 = _type === 'read' ? 2 : 4;
  for (let i = 0; i < n2; i ++) {
    let _i = i;
    let sort =  ++ _i;

    let o = {};

    // let type = (i % 2) === 0 ? 'voice': 'select';
    // // let type = 'select';
    let type = null;

    if (_type === 'read') {
      type = 'voice';
    } else {
      // type = (i % 2) === 0 ? 'voice': 'select';
      type = (i % 2) === 0 ? 'select': 'voice';
    }

    let node_time = 0;
    switch (i) {
      case 0:
        node_time = 3;
        break;
      case 1:
        node_time = 6;
        break;
      case 2:
        node_time = 9;
        break;
      case 3:
        node_time = 12;
        break;
      default:
        break;
    }

    let question_text = type === 'voice' ? Random.cparagraph(1) : Random.cparagraph(2, 3);
    let question_voice = type === 'voice' ? `https://miniapi.yvshare.cn/images/videos/${Random.integer(0, 249)}.png` : 'https://miniapi.yvshare.cn/keep/audios/test.mp3';
    let desc = Random.cparagraph(1, 3);

    let question_content = Random.cparagraph(2, 3);

    let options = [];
    let answers = [];

    if (type === 'select') {
      for (let j = 0; j < 4; j ++) {
        options.push(Random.ctitle(8, 15));
      }

      answers.push(Random.integer(1, 2));
    }

    o = { type, sort, node_time, question_text, question_voice, question_content, options, answers, desc };

    questions.push(o);
  }

  let obj = {
    type: '阅读技巧',
    video: video,
    contents,
    mind_map_images,
    questions
  };

  return obj;
}
router.post('/small-classroom', (req, res, next) => {
  
  let data = generateSmallClassRoom(req);

  res.send({
    code: 0,
    data: data,
    message: 'success',
    timestamp: + new Date()
  });
});

const generateMindMapData = () => {
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

  return data;
}
router.post('/mind-maps', (req, res, next) => {
  
  let data = generateMindMapData();

  res.send({
    code: 0,
    data: data,
    message: 'success',
    timestamp: + new Date()
  });
});

// 生成机器人
const generateNpc = () => {
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

const generateQuizData = () => {
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
    let answers = [1];
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

    obj = { level, question_text, question_voice, options, answers, analysis, desc };

    data.push(obj);
  }

  return data;
}
router.post('/quiz', (req, res, next) => {
  
  let data = generateQuizData();

  res.send({
    code: 0,
    data: data,
    message: 'success',
    timestamp: +new Date()
  });
});

router.post('/quiz-robot-info', (req, res, next) => {
  let data = [];

  let npc = generateNpc();

  for (let i = 0; i < 8; i ++) {
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
    code: 0,
    data: data,
    message: 'success',
    timestamp: + new Date()
  });
});

// 上传录音
router.post('/upload-file', (req, res, next) => {
  let body = req.body;

  console.log(body);

  res.send({
    code: 0,
    data: {
      path: body.file
    },
    message: 'success',
    timestamp: + new Date()
  })
});

// 提交答题数据
// step 1/2/3/4
router.post('/upload-homework', (req, res, next) => {
  let body = req.body;

  console.log(body);

  res.send({
    code: 0,
    data: {},
    message: 'success',
    timestamp: + new Date()
  })
});

// 课时数据
router.post('/calendar', (req, res, next) => {
  let data = {};
  
  let period_content = {};
  let title = '开学第一课';
  let happy_read = generateHappyReadData();
  let mind_maps = generateMindMapData()
  let quiz = generateQuizData();
  let small_classroom = generateSmallClassRoom(req);
  let first_step = { title, happy_read, mind_maps, quiz, small_classroom };
  first_step = JSON.stringify(first_step);
  period_content.first_step = first_step;
  period_content.course_img = `https://miniapi.yvshare.cn/images/videos/${Random.integer(0, 249)}.png`;
  period_content.type = 'read'; // read/write
  period_content.lesson_title = Random.ctitle(4, 7);
  period_content.lesson_desc = Random.cparagraph(1, 2);
  period_content.lesson_day = Random.integer(1, 5);

  let lesson_period = generateLessonPeriod();

  let student_id = 1111310027;
  let course_id = 1000014;
  let course_name = Random.ctitle(4, 6);
  let special_id = 1000011;
  let lesson_period_id = 1000732;
  let lesson_count = 0;
  let learned_lesson_count = 0;

  data = {
    period_content,
    lesson_period,
    student_id,
    course_id,
    course_name,
    special_id,
    lesson_period_id,
    lesson_count,
    learned_lesson_count
  };

  res.send({
    code: 0,
    data: data,
    message: 'success',
    timestamp: +new Date()
  })
});

// 生成 lesson_period 数据
const generateLessonPeriod = () => {
  let data = [];

  let n = Random.integer(1, 4);

  for (let i = 0; i < n; i++) {
    let obj = {};

    let _i = i;
    ++ _i;

    obj.star = Random.integer(1, 3);
    obj.step_type = _i;
    obj.id = Random.integer(111, 999);

    data.push(obj);
  }

  return data;
}

router.get('/test', (req, res, next) => {
  let data = generateLessonPeriod();

  res.send({
    code: 0,
    data: data,
    message: 'success',
    timestamp: +new Date()
  })
})

module.exports = router;
