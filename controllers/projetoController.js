// controllers/projetoController.js
const Projeto = require('../models/projetoModels');

exports.getAll = async (req, res) => {
  try {
    const projetos = await Projeto.getAll();
    res.render('index',{projetos});
  } catch (error) {
    console.error('Erro ao buscar projetos:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
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
