var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session'); // Added line for requiring session
var passport = require('passport'); // Ensure passport is required
var cors = require('cors');

require('./app_api/models/db'); // This sets up your mongoose connection
require('./app_api/models/user'); // This registers your User model
require('./app_api/config/passport'); // Now you can safely configure passport with the User model

const userRoutes = require('./app_server/routes/users');
const indexRouter = require('./app_server/routes/index');
const apiRoutes = require('./app_api/routes/api');

var app = express();

// View engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Session and Passport setup
app.use(session({
  secret: 'your_secret_key', // Make sure to replace 'your_secret_key' with a real secret key
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Middleware to redirect to login if not authenticated
// This middleware should be placed after static files and before your routes
app.use((req, res, next) => {
  if (!req.user && !req.path.includes('/login') && !req.path.includes('/register') && !req.path.startsWith('/api')) {
    res.redirect('/login');
  } else {
    next();
  }
});

// Routes
app.use('/', indexRouter);
app.use('/users', userRoutes); // Make sure this is the correct path for your user routes
app.use('/api/v1', apiRoutes);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
