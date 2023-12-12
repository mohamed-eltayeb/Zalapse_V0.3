const mongoose = require('mongoose');

const cameraSchema = new mongoose.Schema({
  cam_id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    maxlength: 255
  },
  description: {
    type: String,
    default: ""
  },
  longitude: {
    type: Number,
  },
  latitude: {
    type: Number,
  },
  developer_id: {
    type: Number,
    required: true
  },
  project_id: {
    type: Number,
    required: true
  },
  is_active: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Camera', cameraSchema);
