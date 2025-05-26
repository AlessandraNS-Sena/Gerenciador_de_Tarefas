const express = require('express');
const path = require('path');

const router = express.Router();

// Servir a página inicial com a view HTML
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

module.exports = router;