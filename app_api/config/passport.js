// app_server/config/passport.js
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('User');

passport.use(new LocalStrategy({
  usernameField: 'email' // or 'username', depending on your user model
},
(email, password, done) => {
  User.findOne({ email: email }, (err, user) => {
    if (err) { return done(err); }
    if (!user || !user.validPassword(password)) {
      return done(null, false, {
        message: 'Incorrect email or password.'
      });
    }
    return done(null, user);
  });
}));

// ... serializeUser and deserializeUser methods
