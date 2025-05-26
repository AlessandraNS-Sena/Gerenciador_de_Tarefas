// controllers/comentarioController.js
const Comentario = require('../models/comentario');

exports.getAll = async (req, res) => {
  const comentarios = await Comentario.getAll();
  res.json(comentarios);
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  const comentario = await Comentario.getById(id);
  if (!comentario) return res.status(404).json({ error: 'Comentario not found' });
  res.json(comentario);
};

exports.create = async (req, res) => {
  const data = req.body;
  const newComentario = await Comentario.create(data);
  res.status(201).json(newComentario);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const updatedComentario = await Comentario.update(id, data);
  if (!updatedComentario) return res.status(404).json({ error: 'Comentario not found' });
  res.json(updatedComentario);
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  const success = await Comentario.delete(id);
  if (!success) return res.status(404).json({ error: 'Comentario not found' });
  res.status(204).send();
};
