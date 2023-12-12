// app_api/routes/api.js
const express = require('express');
const router = express.Router();
const developersController = require('../controllers/developersController');
//const otherController = require('../controllers/otherController'); // Example for additional controllers

// Diagnostic logging to check if functions are defined
console.log('List Developers:', developersController.listDevelopers);
console.log('Find Projects by Developer:', developersController.findProjectsByDeveloper);
console.log('Find Cam Function Function:', camsController.findCamsByProject); // Replace with actual function names
console.log('Find Cam image Function:', imageviewController.findImageByCam);
// Route definitions
console.log('Find Developer Per user Function:', imageviewController.findLocationsByImages );
// Route definitions

router.get('/developers', developersController.listDevelopers); // Check if listDevelopers is exported correctly
router.get('/developers/:developerID/projects', developersController.findProjectsByDeveloper); // Check if findProjectsByDeveloper is exported correctly
// ... other routes that use functions from otherController

module.exports = router;
