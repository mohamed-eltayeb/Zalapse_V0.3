// app_server/routes/users.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');
const middleware = require('../controllers/middleware');

// Route to serve the registration page
router.get('/register', userController.registerGet);

// Route to handle the registration form submission
router.post('/register', userController.registerPost);

// Route to serve the login page
router.get('/login', userController.loginGet);

// Route to handle the login form submission
router.post('/login', userController.loginPost);

// Example of a protected route for admin
router.get('/admin-only', middleware.isAdmin, userController.adminOnly);

// Export the router
module.exports = router;
