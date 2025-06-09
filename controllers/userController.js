// controllers/userController.js
const User = require('../models/UserModels');

exports.getAll = async (req, res) => {
  const users = await User.getAll();
  res.json(users);
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  const user = await User.getById(id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  res.json(user);
};

exports.create = async (req, res) => {
  const data = req.body;
  console.log(req.body);
  const newUser = await User.create(data);
  res.status(201).json(newUser);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const updatedUser = await User.update(id, data);
  if (!updatedUser) return res.status(404).json({ error: 'User not found' });
  res.json(updatedUser);
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  const success = await User.delete(id);
  if (!success) return res.status(404).json({ error: 'User not found' });
  res.status(204).send();
};
