// controllers/tarefaController.js
const Tarefa = require('../models/tarefa');

exports.getAll = async (req, res) => {
  const tarefas = await Tarefa.getAll();
  res.json(tarefas);
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  const tarefa = await Tarefa.getById(id);
  if (!tarefa) return res.status(404).json({ error: 'Tarefa not found' });
  res.json(tarefa);
};

exports.create = async (req, res) => {
  const data = req.body;
  const newTarefa = await Tarefa.create(data);
  res.status(201).json(newTarefa);
};

exports.update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  const updatedTarefa = await Tarefa.update(id, data);
  if (!updatedTarefa) return res.status(404).json({ error: 'Tarefa not found' });
  res.json(updatedTarefa);
};

exports.delete = async (req, res) => {
  const { id } = req.params;
  const success = await Tarefa.delete(id);
  if (!success) return res.status(404).json({ error: 'Tarefa not found' });
  res.status(204).send();
};
