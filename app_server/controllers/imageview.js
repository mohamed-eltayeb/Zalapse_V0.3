const Camera = require('../../app_api/models/camera');
const Image = require('../../app_api/models/image');

exports.camImageView = async (req, res, next) => {
  const camId = req.params.camId; // Ensure the route provides this
  try {
    const camera = await Camera.findById(camId);
    const images = await Image.find({ cam_id: camId }).sort({ timestamp: -1 }).limit(1); // Assuming you want the latest image
    res.render('camview', { 
      title: `${camera.name} ImageView`, 
      camera: camera, 
      latestImage: images.length > 0 ? images[0] : null 
    });
  } catch (err) {
    next(err);
  }
};