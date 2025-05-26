// rotas.js
const express = require('express');
const router = express.Router();

const usersRoutes = require('./users');
const projetosRoutes = require('./projetos');
const tarefasRoutes = require('./tarefas');
const comentariosRoutes = require('./comentarios');

router.use('/users', usersRoutes);
router.use('/projetos', projetosRoutes);
router.use('/tarefas', tarefasRoutes);
router.use('/comentarios', comentariosRoutes);

router.get('/', (req, res) => {
  res.send('Olá!');
});

module.exports = router;

