// controllers/tarefaUsuarioController.js
const TarefaUsuario = require('../models/tarefaUsuario');

exports.assignUserToTask = async (req, res) => {
  const { userId, tarefaId } = req.body;
  const assignment = await TarefaUsuario.assignUserToTask(userId, tarefaId);
  res.status(201).json(assignment);
};

exports.getTasksByUser = async (req, res) => {
  const { userId } = req.params;
  const tarefas = await TarefaUsuario.getByUserId(userId);
  res.json(tarefas);
};

exports.removeUserFromTask = async (req, res) => {
  const { userId, tarefaId } = req.params;
  const success = await TarefaUsuario.remove(userId, tarefaId);
  if (!success) return res.status(404).json({ error: 'Assignment not found' });
  res.status(204).send();
};
