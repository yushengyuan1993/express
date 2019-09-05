var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

/**
 * miniapp
 */
var video = require('./routes/app/video');
var cheerio = require('./routes/cheerio');

var book = require('./routes/app/book');

var keep = require('./routes/app/keep');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 设置跨入请求
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "http://111.231.78.140:8080");
//   res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

app.use('/', indexRouter);
app.use('/users', usersRouter);

/**
 * miniapp
 */
app.use('/video', video)
app.use('/book', book)

app.use('/keep', keep)

app.use('/cheerio', cheerio)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.status(404).render('404', { title: '你想要的东西啊~', desc: '并不存在！' });
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
