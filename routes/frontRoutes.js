const express = require('express');
const router = express.Router();
const path = require('path');
const Projeto = require('../models/projetoModels');

// Roteamento para páginas dinâmicas
router.get('/', (req, res) => {
  res.render(path.join(__dirname, '../views/cadastro/main'), {
    pageTitle: 'Página Inicial',
  });
});

router.get('/projetos', (req, res) => {
  res.render(path.join(__dirname, '../views/main'), {
    pageTitle: 'Página Inicial',
  });
});

router.get('/projeto/:projetoId/tarefas', async (req, res, next) => {
  try {
    const projetoId = req.params.projetoId;
    // Busca o projeto completo no banco
    const pModel = await Projeto.getById(projetoId); // ajuste conforme seu model

    if (!pModel) {
      return res.status(404).send('Projeto não encontrado');
    }

    res.render('tarefas/tasks', {
      pageTitle: 'Tarefas do Projeto',
      projeto: pModel, // aqui sim, envia o objeto completo
    });
  } catch (error) {
    next(error); // passa o erro para middleware de erro
  }
});



// Adicione outras rotas conforme necessário

module.exports = router;
