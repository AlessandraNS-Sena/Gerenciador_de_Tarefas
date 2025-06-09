const express = require('express');
const router = express.Router();
const ProjetoController = require('../controllers/projetoController');

router.get('/:userId', ProjetoController.getAll);          // Listar todos os projetos
router.post('/create', ProjetoController.create);         // Criar novo projeto
router.get('/:id', ProjetoController.getById);        // Buscar projeto por ID
router.put('/update/:id', ProjetoController.update);      // Atualizar projeto
router.delete('/delete/:id', ProjetoController.delete);  // Deletar projeto

module.exports = router;
