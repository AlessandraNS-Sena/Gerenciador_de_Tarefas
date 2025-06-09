// controllers/projetoController.js
const Projeto = require('../models/projetoModels');
const User = require('../models/UserModels');


exports.getAll = async (req, res) => {
  try {
    const projetos = await Projeto.getAll();
    res.render('index',{projetos});
  } catch (error) {
    console.error('Erro ao buscar projetos:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
};

exports.create = async (req, res) => {
  try {
    const userId = req.session.user_id; // Obtendo o ID do usuário da sessão
    if (!userId) {
      return res.status(401).json({ error: "Usuário não autenticado" });
    }

    const data = { ...req.body, id_user: userId }; // Associando o ID do usuário ao projeto
    const newProjeto = await Projeto.create(data);
    
    res.status(201).json(newProjeto);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar projeto", error });
  }
};

exports.getById = async (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ error: 'ID inválido. Deve ser um número.' });
  }

  try {
    const projeto = await Projeto.getById(parseInt(id));
    if (!projeto) return res.status(404).json({ error: 'Projeto não encontrado' });
    res.json(projeto);
  } catch (error) {
    console.error('Erro ao buscar projeto por ID:', error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
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
