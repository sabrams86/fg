var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cookieSession = require('cookie-session');
// var flash = require('connect-flash');
var bcrypt = require('bcryptjs');
var mongoose = require('mongoose');

require('dotenv').load()

var routes = require('./routes/index');
var users = require('./routes/users');
var items = require('./routes/items');
var contracts = require('./routes/contracts');
var auth = require('./routes/auth');
var categories = require('./routes/categories');

var app = express();

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3474');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}

app.set('trust proxy', 1) // trust first proxy

app.use(cookieSession({
  name: 'session',
  keys: [process.env.SESSION_KEY1, process.env.SESSION_KEY2, process.env.SESSION_KEY3]
}));

//use static angular views instead
app.use(express.static(__dirname + '/public/views'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(allowCrossDomain);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use('/dist',  express.static(__dirname + '/dist'));


app.use('/', function (req, res, next) {
  if (req.session.user){
    res.locals.user_id = req.session.user;
  }
  next();
});

app.use('/', routes);
app.use('/', auth);
app.use('/', users);
app.use('/', categories);
app.use('/', items);
app.use('/', contracts);

// app.use('/users/:userId', function (req, res, next) {
//   res.locals.owner_id = req.params.userId;
//   next();
// }, items);
//
// app.use('/users/:userId/items/:itemId', function (req, res, next) {
//   res.locals.owner_id = req.params.userId;
//   res.locals.item_id = req.params.itemId;
//   next();
// }, contracts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
