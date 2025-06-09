const express = require('express');
const router = express.Router();

const TarefaUsuarioController = require('../controllers/tarefaUsuarioController');

router.post('/create', TarefaUsuarioController.assignUserToTask);    // Atribuir usuário a tarefa
router.get('/:userId', TarefaUsuarioController.getByUserId); // Buscar tarefas do usuário
router.delete('/:userId', TarefaUsuarioController.remove);             // Remover usuário da tarefa (espera userId e tarefaId no body)

module.exports = router;
