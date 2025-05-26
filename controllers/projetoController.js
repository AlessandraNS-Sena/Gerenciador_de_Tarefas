// controllers/projetoController.js
const Projeto = require('../models/projeto');

exports.getAll = async (req, res) => {
  const projetos = await Projeto.getAll();
  res.json(projetos);
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  const projeto = await Projeto.getById(id);
  if (!projeto) return res.status(404).json({ error: 'Projeto not found' });
  res.json(projeto);
};

exports.create = async (req, res) => {
  const data = req.body;
  const newProjeto = await Projeto.create(data);
  res.status(201).json(newProjeto);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const updatedProjeto = await Projeto.update(id, data);
  if (!updatedProjeto) return res.status(404).json({ error: 'Projeto not found' });
  res.json(updatedProjeto);
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  const success = await Projeto.delete(id);
  if (!success) return res.status(404).json({ error: 'Projeto not found' });
  res.status(204).send();
};
