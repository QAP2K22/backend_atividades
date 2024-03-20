const express = require('express');
const router = express.Router();

// Definir rotas para usuários
router.get('/', (req, res) => {
    res.send('Exercicios lista 04');
});


/*
    Faça um Programa que calcule e imprima o salário reajustado de um funcionário de acordo com a seguinte regra:
    - Salários até 2.000, reajuste de 50%
    - Salários maiores que 2.000, reajuste de 30%
*/

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

/*
   Faça um script que leia 3 números inteiros e verifique qual o maior, imprimindo o resultado (suponha números diferentes).
*/

router.post('/ex02', (req, res) => {
});

/*
    Em uma pizzaria, cada tulipa de chopp custa R$ 4,80 e uma pizza mista grande custa R$17,00, mais R$1,50 por tipo de cobertura pedida (queijo, presunto, banana, etc.).
    Uma turma vai à pizzaria e pede uma determinada quantidade de "chopps" e uma pizza grande com uma determinada quantidade de coberturas.
    Faça um algoritmo que calcule a conta e, sabendo quantas pessoas estão à mesa, quanto que cada um deve pagar (não esqueça os 10% do garçom).
*/

router.post('/ex03', (req, res) => {
});

/*
*/

router.post('/ex04', (req, res) => {
    const { salarioMinimo, horasExtras, depentes, horasTrabalhadas } = req.body

    const valoresHorasTrabalhadas = salarioMinimo * 0.2
    const salarioMes = valoresHorasTrabalhadas * horasTrabalhadas
    const valorDependente = depentes * 32
    const valorHoraExtra = valoresHorasTrabalhadas * 1.5 * horasExtras
    const salarioBruto = salarioMes + valorDependente + valorHoraExtra

    let imposto = 0

    if (salarioBruto >= 5000) {
        imposto = salarioBruto * 0.2
    } else if (salarioBruto >= 2000 ) {
        imposto = salarioBruto * 0.1
    }


    const salarioLiquido = salarioBruto - imposto
    const gratificacao = salarioBruto < 3500 ? 1000 : 500
    const salarioReceber = salarioBruto + salarioLiquido + gratificacao

    res.status(200).json({ salarioBruto, imposto, gratificacao, salarioReceber })
})

/*
*/

router.post('/ex05', (req, res) => {
});

/*
*/

router.post('/ex06', (req, res) => {
});

/*
*/

router.post('/ex07', (req, res) => {
});

/*
*/

router.post('/ex08', (req, res) => {
});

/*
*/

router.post('/ex09', (req, res) => {
});


module.exports = router;