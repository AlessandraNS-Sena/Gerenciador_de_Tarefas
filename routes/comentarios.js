const express = require('express');
const router = express.Router();

const ComentarioController = require('../controllers/comentarioController');

router.get('/', ComentarioController.getAll);          // Listar todos os comentários
router.get('/:id', ComentarioController.getById);        // Buscar comentário por ID
router.post('/', ComentarioController.create);         // Criar novo comentário
router.put('/:id', ComentarioController.update);      // Atualizar comentário
router.delete('/:id', ComentarioController.delete);  // Deletar comentário

module.exports = router;
