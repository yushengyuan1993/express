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
    let analysis_voice = `https://miniapi.yvshare.cn/keep/audios/${Random.integer(1, 3)}.mp3`;
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

    o = { type, sort, node_time, question_text, question_voice, analysis_voice, question_content, options, answers, desc };

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
const _generateSmallClassRoom = (req) => {
  return {
    type: 'write',
    cover_image: 'http://public-1254368367.file.myqcloud.com/kms/2019-10-24/25d4f0f1-cc6c-4a2b-9c7f-c6b9be38e807.png',
    introduction: '重庆市小学语文阅读能力竞赛试题',
    write_skill_prompt: '',
    video: 'https://v.kuaizaixuetang.com/2cf96c74vodtransgzp1254368367/e6179e285285890795618110431/v.f23835.mp4',
    mind_map_images: ['http://test-public-1254368367.file.myqcloud.com/kms/2019-09-24/8f19fc6d-cf1b-432a-99d0-19c1f518a336.jpg'],
    mind_map_desc: '旅客的情感变化',
    questions: [
      {
        type: 'drag',
        sort: '1',
        node_time: '2',
        question_texts: [
          ['月', '出', '于', '*', '，', '徘', '徊', '于', '斗', '牛', '之', '间', '。', '*', '横', '江', '，', '水', '光', '接', '天', '。', '纵', '一', '苇', '之', '所', '如', '，', '*', '万', '顷', '之', '茫', '然', '。'],
        ],
        question_voice: 'http://public-1254368367.file.myqcloud.com/kms/2019-10-24/b9f340fc-5a8d-440b-9116-221a82e1267b.mp3',
        options: [
          '白露',
          '东山之上',
          '斗牛之间',
          '斗牛之间',
          '凌',
          '斗牛之间',
        ],
        right_options: [],
        answers: ['2', '1', '5'],
        harvest_type: '夯实基础',
      },
      {
        type: 'imageSelect',
        sort: '3',
        node_time: '3',
        image: 'http://public-1254368367.file.myqcloud.com/kms/2019-10-24/3abdfbea-270e-4169-b328-1034588ec839.png',
        question_texts: [
          '3.请你通过描述小红的语言，来体现小明成绩的优秀。',
        ],
        question_voice: '',
        analysis_voice: '',
        options: [
          // 'https://miniapi.yvshare.cn/images/videos/4.png',
          // 'https://miniapi.yvshare.cn/images/videos/5.png',
          // 'https://miniapi.yvshare.cn/images/videos/6.png',
          // 'https://miniapi.yvshare.cn/images/videos/15.png',

          'http://localhost:3003/images/videos/4.png',
          'http://localhost:3003/images/videos/5.png',
          'http://localhost:3003/images/videos/6.png',
          'http://localhost:3003/images/videos/15.png',
        ],
        answers: [
          '2',
        ],
        desc: '描述小红语言来体现小明成绩优秀',
        writing_harvests: [
          '',
        ],
      },
      {
        type: 'select',
        sort: '2',
        node_time: '7',
        image: 'http://public-1254368367.file.myqcloud.com/kms/2019-10-24/3abdfbea-270e-4169-b328-1034588ec839.png',
        question_texts: [
          '2.下面这句话可以看出奶奶的什么性格特点',
          '“奶奶坐在窗边，扶着眼镜，拿出旧衣服，开始缝缝补补，她舍不得丢掉，穿不了 的就做成枕套，袖套，奶奶是变废为宝的小能手，妈妈买的新衣服她总是舍不得 穿。”',
        ],
        question_voice: '',
        analysis_voice: '',
        options: [
          '妈妈拿着我的卷子，一遍遍检',
          '穿不了的就做成枕套',
          '奶奶是变废为宝的小能手',
          '买的新衣服她总是舍不得穿',
        ],
        answers: [
          '2',
        ],
        desc: '',
        writing_harvests: [
          '',
        ],
      },
      {
        type: 'voice',
        sort: '1',
        node_time: '8',
        image: 'http://public-1254368367.file.myqcloud.com/kms/2019-10-24/3abdfbea-270e-4169-b328-1034588ec839.png',
        question_texts: [
          '1.你知道文章大多数内容在写谁吗？',
        ],
        question_voice: '',
        analysis_voice: '',
        options: [
          '',
        ],
        answers: [
          '',
        ],
        desc: '文章的大多数在写谁？',
        writing_harvests: [
          '',
        ],
      },
    ],
    contents: [
      '在乡下一家并不豪华而且有些简陋的旅店里，躺着一位客人，他正在欣赏着楼上传来的优美的钢琴声。琴声一会儿低沉，一会儿高亢；低的时候如珠子在盘中滚动，高的时候像雷鸣震撼大地。',
      '“这是谁弹的呢？”旅客想着。忽然，“滴答”一声，一滴水滴在他的脸上。他睁眼一看，又一滴水滴入他的眼里，他气极了，大声喊：“来人！”服务员慌慌张张地跑来。旅客生气地问：“楼上是谁？怎么往地上倒水呢？”服务员赶忙答道：“是著名音乐家贝多芬！”',
      '旅客一听名字，怒气消了一半。',
      '“要不要我去关照他，不要让水滴下来呢？”“不，不，我自己去。”',
      '旅客转身上了楼。透过门缝见贝多芬正全神贯注地弹着钢琴，琴边有盆水。他正纳闷，突然看见满身大汗的贝多芬把手指往盆里一浸，又继续弹。啊！原来贝多芬苦练得手指都发烫了，需要随时用冷水冷却一下。因为太专注弹琴，没看到水溅了一地，顺着地板缝滴到楼下去了。',
      '这位旅客在门外站了很久才离开，当他下楼时，暗暗感叹道：“了不起的贝多芬！”',
    ],
  };
}

router.post('/small-classroom', (req, res, next) => {
  
  // let data = generateSmallClassRoom(req);
  let data = _generateSmallClassRoom(req);

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
  // period_content.type = 'read'; // read/write
  period_content.type = req.body.type; // read/write
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

// 真题阅读 跟读部分
const generateHappyReadFollow = () => {
  return {
    code: 0,
    data: {
      follow: {
        haoci: {
          voice: 'https://miniapi.yvshare.cn/keep/audios/1.mp3',
          // voice: 'http://localhost:3003/keep/audios/1.mp3',
          words: [
            {
              text: ['明媚'],
              point: 0,
              high_light: 'not_high_light',
            },
            {
              text: ['暖意'],
              point: 3,
              high_light: 'not_high_light',
            },
            {
              text: ['大帝出征', '详细信息'],
              point: 6,
              high_light: 'not_high_light',
            },
          ]
        },
        haoju: {
          voice: 'https://miniapi.yvshare.cn/keep/audios/2.mp3',
          // voice: 'http://localhost:3003/keep/audios/2.mp3',
          words: [
            {
              text: ['玉不琢。玉不琢，不成器。人不学，不知义。'],
              point: 0,
              high_light: 'not_high_light',
            }
          ]
        }
      }
    },
    message: 'success',
    timestamp: +new Date()
  }
}
router.get('/happy-read-follow', (req, res, next) => {
  res.send(generateHappyReadFollow());
})



module.exports = router;
