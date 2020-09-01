const data = [
  {
    title: '拖拽题',
    type: 'drag',
    multiple: false,
    question_text: [
      [
        "请",
        "把",
        "正",
        "确",
        "答",
        "案",
        "拖",
        "入",
        "方",
        "框",
        "内",
        "。"
      ],
      [
        "“",
        "蹿",
        "”",
        "字",
        "用",
        "音",
        "序",
        "查",
        "字",
        "法",
        "，",
        "应",
        "先",
        "查",
        "字",
        "母",
        "“",
        "C",
        "”",
        "，",
        "再",
        "查",
        "音",
        "节",
        "*",
        "。"
      ]
    ],
    options: [
      "cuān",
      "cuɑn",
      "uān"
    ],
    answers: ["1"],
  },
  {
    title: '文字选择-单选',
    type: 'select',
    multiple: false,
    question_text: [
      "下面句子中“de”字使用错误的是哪一项？"
    ],
    options: [
      "大鲨鱼气势汹汹地游过来。",
      "小鱼们游地很慢。",
      "大鲨鱼摸着瘪瘪的肚子。"
    ],
    answers: ["2"]
  },
  {
    title: '文字选择-多选',
    type: 'select',
    _type: 'multipleSelect',
    multiple: true,
    question_text: [
      "文中写了郑板桥爱子的哪些事？"
    ],
    options: [
      "写信告诉弟弟要严格管教自己的儿子。",
      "夸奖孩子愿意吃并不好吃的窝窝头。",
      "临终前教育孩子要自立，学会自己做事。"
    ],
    answers: ["1", "3"]
  },
  {
    title: '图片选择-单选',
    type: 'imageSelect',
    multiple: false,
    question_text: [
      "下面句子中“de”字使用错误的是哪一项？"
    ],
    options: [
      "大鲨鱼气势汹汹地游过来。",
      "小鱼们游地很慢。",
      "大鲨鱼摸着瘪瘪的肚子。"
    ],
    answers: ["2"]
  },
  {
    title: '图片选择-多选',
    type: 'imageSelect',
    _type: 'multipleImageSelect',
    multiple: true,
    question_text: [
      "文中写了郑板桥爱子的哪些事？"
    ],
    options: [
      "写信告诉弟弟要严格管教自己的儿子。",
      "夸奖孩子愿意吃并不好吃的窝窝头。",
      "临终前教育孩子要自立，学会自己做事。"
    ],
    answers: ["1", "3"]
  },
  {
    title: '连线题',
    type: 'linkLine',
    multiple: false,
    question_text: [
      "今天的文章中出现了好几组反义词，请你连一连。"
    ],
    options: [
      "谦虚",
      "黑暗",
      "点燃"
    ],
    right_options: [
      "明亮",
      "熄灭",
      "骄傲"
    ],
    answers: ["3","1","2"]
  },
];

module.exports = data;
