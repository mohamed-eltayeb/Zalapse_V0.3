const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('User');

// Method to render the registration form
exports.registerGet = (req, res) => {
  res.render('register', { title: 'Register' });
};

// Method to handle the registration form submission
exports.registerPost = (req, res) => {
  const user = new User();
  user.username = req.body.username;  // Adjust according to your User model
  user.role = req.body.role;  // Adjust according to your User model
  user.setPassword(req.body.password);  // Ensure you have setPassword method in User model

  user.save((err) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.redirect('/login');  // Redirect to login after registration
    }
  });
};

// Method to render the login form
exports.loginGet = (req, res) => {
  res.render('login', { title: 'Login' });
};

// Method to handle the login form submission
exports.loginPost = passport.authenticate('local', {
  successRedirect: '/',  // Redirect to the home page on successful login
  failureRedirect: '/login',  // Redirect back to the login page if there is an error
  failureFlash: true  // Enable messages
});

// Example of a protected route for admin
exports.adminOnly = (req, res) => {
  if (req.user.role === 'Admin') {
    res.render('adminPage', { title: 'Admin Area' });  // Render an admin specific page
  } else {
    res.status(403).json({ "message": "Access Denied" });
  }
};
