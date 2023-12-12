const Customer = require('../models/developer'); // Assuming you have a Customer model
const Project = require('../models/project'); // Assuming you have a Project model
const Camera = require('../models/camera'); // Assuming you have a Camera model
const Image = require('../models/image'); // Assuming you have an Image model

// GET 'Customers list' Page
module.exports.listCustomers = (req, res, next) => {
    Customer.find({}, (err, customers) => {
        if (err) { return next(err); }
        res.render('customer_list', { title: 'Customers', customers: customers });
    });
};

// GET 'Projects list' Page
module.exports.listProjects = (req, res, next) => {
    const customerId = req.params.customerId; // You get this from the route parameter
    Project.find({ customer: customerId }, (err, projects) => {
        if (err) { return next(err); }
        res.render('project_list', { title: 'Projects', projects: projects });
    });
};

// GET 'Cameras list' Page
module.exports.listCameras = (req, res, next) => {
    const projectId = req.params.projectId;
    Camera.find({ project: projectId }, (err, cameras) => {
        if (err) { return next(err); }
        res.render('camera_list', { title: 'Cameras', cameras: cameras });
    });
};

// GET 'Images list' Page
module.exports.listImages = (req, res, next) => {
    const cameraId = req.params.cameraId;
    Image.find({ camera: cameraId }, (err, images) => {
        if (err) { return next(err); }
        res.render('image_list', { title: 'Images', images: images });
    });
};

// GET 'Project Details' Page
module.exports.getProjectDetails = (req, res, next) => {
    const projectId = req.params.projectId;
    Project.findById(projectId, (err, project) => {
        if (err) { return next(err); }
        res.render('project_details', { title: 'Project Details', project: project });
    });
};
