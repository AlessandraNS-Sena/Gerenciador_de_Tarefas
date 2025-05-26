const express = require('express');
const router = express.Router();

const TarefaController = require('../controllers/tarefaController');

router.get('/', TarefaController.getAll);          // Listar todas as tarefas
router.get('/:id', TarefaController.getById);        // Buscar tarefa por ID
router.post('/', TarefaController.create);         // Criar nova tarefa
router.put('/:id', TarefaController.update);      // Atualizar tarefa
router.delete('/:id', TarefaController.delete);  // Deletar tarefa

module.exports = router;
