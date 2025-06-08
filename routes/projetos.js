const express = require('express');
const router = express.Router();
const ProjetoController = require('../controllers/projetoController');

router.get('/', ProjetoController.getAll);          // Listar todos os projetos
router.get('/:id', ProjetoController.getById);        // Buscar projeto por ID
router.post('/criar', ProjetoController.create);         // Criar novo projeto
router.put('/AtualizarProjeto', ProjetoController.update);      // Atualizar projeto
router.delete('/DeletarProjeto', ProjetoController.delete);  // Deletar projeto


module.exports = router;
