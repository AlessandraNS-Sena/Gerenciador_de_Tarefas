const express = require('express');
const router = express.Router();

const ProjetoController = require('../controllers/projetoController');

router.get('/', ProjetoController.getAll);          // Listar todos os projetos
router.get('/:id', ProjetoController.getById);        // Buscar projeto por ID
router.post('/', ProjetoController.create);         // Criar novo projeto
router.put('/:id', ProjetoController.update);      // Atualizar projeto
router.delete('/:id', ProjetoController.delete);  // Deletar projeto

module.exports = router;
