const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  image_url: {
    type: string,
    required: true,
    unique: true
  },
  developer_id: {
    type: Number,
    required: true
  },
  project_id: {
    type: Number,
    required: true
  },
  cam_id: {
    type: Number,
    required: true
  },
  path: {
    type: String,
    required: true,
    maxlength: 255
  }
});

module.exports = mongoose.model('Image', imageSchema);
