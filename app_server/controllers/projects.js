const Project = require('../../app_api/models/project');

exports.listProjects = async (req, res, next) => {
  const developerId = req.params.developerId; // Ensure the route provides this
  try {
    const projects = await Project.find({ developer_id: developerId });
    res.render('projects', { title: 'List of Projects', projects: projects });
  } catch (err) {
    next(err);
  }
};