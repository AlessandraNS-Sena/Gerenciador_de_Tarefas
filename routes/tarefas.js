const express = require('express');
const router = express.Router();
const TarefaController = require('../controllers/tarefaController');

router.get('/', TarefaController.getAll);          // Listar todas as tarefas (GET /tarefas)
router.post('/', TarefaController.create);         // Criar nova tarefa (POST /tarefas)
router.get('/:id', TarefaController.getById);      // Buscar tarefa por ID (GET /tarefas/:id)
router.put('/:id', TarefaController.update);       // Atualizar tarefa (PUT /tarefas/:id)
router.delete('/:id', TarefaController.delete);    // Deletar tarefa (DELETE /tarefas/:id)

module.exports = router;
