const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  project_id: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    maxlength: 255
  },
  developer_id: {
    type: Number,
    required: true
  },
  tag: {
    type: String,
    maxlength: 100
  },
  description: {
    type: String,
    default: ""
  },
  is_active: {
    type: Boolean,
    default: true
  },
  logo: {
    type: String,
    maxlength: 255
  }
});

module.exports = mongoose.model('Project', projectSchema);
