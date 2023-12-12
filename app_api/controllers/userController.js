// app_api/controllers/genericController.js
const SomeModel = require('../models/someModel');

exports.getAll = async (req, res) => {
  try {
    const items = await SomeModel.find();
    res.status(200).json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getOne = async (req, res) => {
  // Logic for getting a single item
};

exports.create = async (req, res) => {
  // Logic for creating an item
};

exports.update = async (req, res) => {
  // Logic for updating an item
};

exports.delete = async (req, res) => {
  // Logic for deleting an item
};
