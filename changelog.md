### 1. express.js 热部署
  1. `npm i -g node-dev`
  2. `package.json` 中修改配置:
      ```js
      "scripts": {
        "start": "node ./bin/www", // 修改为下面
        "start": "node-dev ./bin/www"
      },
      ```

### 2. 安装 cheerio (爬虫)
  - npm i cheerio --save

### 3. 安装 request (下载图片)
  - npm i request --save

### 4. 豆瓣API
  - `GET` http://api.douban.com/v2/movie/search?q= `电影名`
  - `GET` http://api.douban.com/v2/movie/subject/`id`