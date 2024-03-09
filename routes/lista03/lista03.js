const express = require('express');
const router = express.Router();

// Definir rotas para usuários
router.get('/', (req, res) => {
    res.send('Exercicios lista 03');
});

router.post('/ex01', (req, res) => {
    const salarioBruto = parseInt(req.body.salarioBruto) * parseInt(req.body.valorHora)
    const bonificacao = 0.03 * parseInt(req.body.salarioBruto) * parseInt(req.body.filhos)
    const salarioFinal = salarioBruto + bonificacao

    res.status(200).json(
        {
            codigo: "BONIFICACAO_FILHOS",
            salarioBruto: salarioBruto,
            bonificacao: bonificacao,
            salarioFinal: salarioFinal
        }
    )
});

module.exports = router;