const express = require('express');
const router = express.Router();
const path = require('path');

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

// Adicione outras rotas conforme necessário

module.exports = router;
