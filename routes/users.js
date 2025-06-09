const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/', UserController.getAll);          // Listar todos os usuários
router.get('/:id', UserController.getById);        // Buscar usuário por ID
router.post('/create', UserController.create);         // Criar novo usuário
router.put('/update/:id', UserController.update);      // Atualizar usuário
router.delete('/:id', UserController.delete);  // Deletar usuário

module.exports = router;
