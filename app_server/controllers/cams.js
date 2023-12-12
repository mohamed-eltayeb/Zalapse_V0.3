const Camera = require('../../app_api/models/camera');

exports.listCameras = async (req, res, next) => {
  const projectId = req.params.projectId; // Ensure the route provides this
  try {
    const cams = await Camera.find({ project_id: projectId });
    res.render('cams', { title: 'List of Cams', cams: cams });
  } catch (err) {
    next(err);
  }
};