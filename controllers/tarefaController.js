// controllers/tarefaController.js
const Tarefa = require('../models/tarefa');


//GET: listando as tarefas
exports.getAll = async (req, res) => {
  try {
    const tarefas = await Tarefa.findAll();
    res.status(200).json(tarefas);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar tarefas' });
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;
  const tarefa = await Tarefa.getById(id);
  if (!tarefa) return res.status(404).json({ error: 'Tarefa not found' });
  res.json(tarefa);
};

//POST: criando uma nova tarefa
exports.create = async (req, res) => {
  const data = req.body;

  try {
    const novaTarefa = await Tarefa.create(data);
    res.status(201).json(novaTarefa);
  } catch (error) {
    console.error('Erro ao criar tarefa:', error);
    res.status(500).json({ error: 'Erro ao criar tarefa' });
  }
};

//PUT: atualizando uma tarefa com base no ID
exports.update = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    const tarefaAtualizada = await Tarefa.update(id, data);
    if (!tarefaAtualizada) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.status(200).json(tarefaAtualizada);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar tarefa' });
  }
};

//DELETE: deletando uma tarefa com base no ID 
exports.delete = async (req, res) => {
  const { id } = req.params;
  try {
    const success = await Tarefa.delete(id);
    if (!success) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar tarefa' });
  }
};