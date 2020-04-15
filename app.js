const createError = require('http-errors');
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const miniapi = require('./routes/api/miniapi');
const activity = require('./routes/api/activity');
const error_catch = require('./routes/api/error-catch');
const video = require('./routes/app/video');
const cheerio = require('./routes/cheerio');
const book = require('./routes/app/book');

const musix = require('./routes/api/musix/musix');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 设置跨域请求
const allowCors = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
};
app.use(allowCors);

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/miniapi', miniapi);
app.use('/activity', activity);
app.use('/catch', error_catch);
app.use('/video', video);
app.use('/book', book);
app.use('/cheerio', cheerio);

app.use('/musix', musix);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  res.status(404).render('404', { title: '你想要的东西啊~', desc: '并不存在！' });
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
