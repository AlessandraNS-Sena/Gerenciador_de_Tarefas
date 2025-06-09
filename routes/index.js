// rotas.js
const express = require('express');
const router = express.Router();

const usersRoutes = require('./users');
const projetosRoutes = require('./projetos');
const tarefasRoutes = require('./tarefas');

router.use('/users', usersRoutes);
router.use('/projetos', projetosRoutes);
router.use('/tarefas', tarefasRoutes);

module.exports = router;

