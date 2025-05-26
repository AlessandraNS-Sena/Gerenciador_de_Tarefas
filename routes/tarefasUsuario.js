const express = require('express');
const router = express.Router();

const TarefaUsuarioController = require('../controllers/tarefaUsuarioController');

router.post('/', TarefaUsuarioController.assignUserToTask);    // Atribuir usuário a tarefa
router.get('/user/:userId', TarefaUsuarioController.getByUserId); // Buscar tarefas do usuário
router.delete('/', TarefaUsuarioController.remove);             // Remover usuário da tarefa (espera userId e tarefaId no body)

module.exports = router;
