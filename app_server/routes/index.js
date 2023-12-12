const express = require('express');
const router = express.Router();

// Import your controllers here
const homeController = require('../controllers/home');
const aboutController = require('../controllers/about');
const contactController = require('../controllers/contact');
const termsAndConditionsController = require('../controllers/termsAndConditions');
const privacyPolicyController = require('../controllers/privacyPolicy');

const developersController = require('../controllers/developers');
const projectsController = require('../controllers/projects');
const camerasController = require('../controllers/cams');
const camViewController = require('../controllers/imageview');

// Home page route
//router.get('/', homeController.home);
router.get('/', function(req, res) {
    if (req.session.user) {
      res.render('index', { 
        title: 'Home Page',
        user: req.session.user  // Assuming the session contains the user object
      });
    } else {
      // Handle the case where there is no user session
      res.render('index', { 
        title: 'Home Page',
        user: { name: 'Guest' }  // Default or fallback user name
      });
    }
  });
  

// Additional static page routes
router.get('/about', aboutController.about);
router.get('/contact', contactController.contact);
router.get('/terms-and-conditions', termsAndConditionsController.termsAndConditions);
router.get('/privacy-policy', privacyPolicyController.privacyPolicy);

// Existing routes for developers, projects, cameras
router.get('/developers', developersController.listDevelopers);
router.get('/developers/:developerId/projects', projectsController.listProjects);
router.get('/projects/:projectId/cams', camerasController.listCameras);
router.get('/cams/:camId', camViewController.camImageView);

module.exports = router;
