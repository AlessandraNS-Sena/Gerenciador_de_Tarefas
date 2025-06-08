const express = require('express');
const path = require('path');

const router = express.Router();
const Projeto = require('../models/projetoModels.js');

// Servir a página inicial com a view HTML

router.get('/', async (req, res) => {
  try {
    const projetos = await Projeto.getAll();
    res.render('index', { projetos });
  } catch (error) {
    console.error('Erro ao buscar projetos:', error);
    res.status(500).send('Erro no servidor');
  }
});

module.exports = router;