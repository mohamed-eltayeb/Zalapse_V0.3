// app_server/controllers/developers.js
// This controller is for server-side rendered pages, not for the API

const Developer = require('../../app_api/models/developer');

exports.listDevelopers = async (req, res, next) => {
  try {
    // You can add query parameters to sort or filter the results as needed
    const developers = await Developer.find().sort({ 'projects.length': -1 }); // Example: Sorting by the number of projects
    res.render('developers', { title: 'List of Developers', developers });
  } catch (err) {
    next(err);
  }
};
