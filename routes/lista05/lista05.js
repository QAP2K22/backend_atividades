const express = require('express');
const router = express.Router();

// Definir rotas para usuários
router.get('/', (req, res) => {
    res.send('Exercicios lista 05');
}); 


module.exports = router;