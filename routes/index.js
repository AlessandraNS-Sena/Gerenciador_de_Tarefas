// rotas.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Olá!');
});

module.exports = router;
