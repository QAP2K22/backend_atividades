const express = require('express');
const router = express.Router();

// Definir rotas para usuários
router.get('/', (req, res) => {
    res.send('Exercicios lista 01');
});

router.post('/ex01', (req, res) => {

    console.log(req)
    let retorno = {}
    const nota1 = parseInt(req.body.nota1) || 0
    const nota2 = parseInt(req.body.nota2) || 0
    const nota3 = parseInt(req.body.nota3) || 0
    const nota4 = parseInt(req.body.nota4) || 0
    const notaFinal = (nota1 + nota2 + nota3 + nota4) / 4

    if (notaFinal >= 7) {
        retorno = {
            codigo: "APROVADO",
            mensagem: "O usuário foi aprovado com sucesso",
            valorNota: notaFinal
        }

        res.status(202).json(retorno)
    } else if (notaFinal < 5) {
        retorno = {
            codigo: "REPROVADO",
            mensagem: "O usuário foi desaprovado com sucesso",
            valorNota: notaFinal
        }
        res.status(200).json(retorno)
    } else {
        retorno = {
            codigo: "RECUPERACAO",
            mensagem: "O usuário foi para a recuperação",
            valorNota: notaFinal
        }
        res.status(200).json(retorno)
    }
});

router.post('/ex02', (req, res) => {
    let retorno = {}
    const totalEleitores = parseInt(req.body.totalEleitores) || 0
    const nulos = parseInt(req.body.totalVotosNulos) || 0
    const brancos = parseInt(req.body.totalVotosBrancos) || 0
    const validos = parseInt(req.body.totalVotosValidos) || 0
    const totalSoma = (nulos + brancos + validos)


    if (totalSoma > totalEleitores) {
        retorno = {
            codigo: "SOMA_VOTOS_MAIOR_TOTAL_ELEITORES",
            mensagem: "Erro: A soma de votos não pode passar o total de eleitores.",
            valorSoma: totalSoma
        }
        res.status(200).json(retorno)

    } else {
        const percBranco = brancos / totalEleitores * 100 + "%"
        const percNulo = nulos / totalEleitores * 100 + "%"
        const percValido = validos / totalEleitores * 100 + "%"

        retorno = {
            codigo: "SOMA_TOTAL_ELEITORES",
            mensagem: "Sucesso: Valor total de eleitores foi válido.",
            totalEleitores: totalEleitores,
            totalVotosBrancos: percBranco,
            totalVotosNulos: percNulo,
            totalVotosValidos: percValido,
        }
        res.status(200).json(retorno)
    }
});

router.post('/ex03', (req, res) => {
    const salarioAtual = parseInt(req.body.salarioAtual) || 0
    const percentualReajuste = parseInt(req.body.percentualReajuste) || 0
    const novoSalario = salarioAtual + (salarioAtual * percentualReajuste / 100)

    res.status(200).json(
        {
            codigo: "REAJUSTE_SALARIO",
            mensagem: "Sucesso: Valor do reajuste salarial.",
            salarioAtual: salarioAtual,
            salarioComReajuste: novoSalario
        }
    )
});

router.post('/ex04', (req, res) => {
    const custoFabricacao = parseInt(req.body.custoFabricacao) || 0
    const percentualImposto = ((45 / 100) * custoFabricacao).toFixed(2)
    const percentualDistribuidor = ((28 / 100) * custoFabricacao).toFixed(2)
    const custoFinal = (custoFabricacao + parseFloat(percentualImposto) + parseFloat(percentualDistribuidor));

    res.status(200).json(
        {
            codigo: "VALOR_VENDA_VEICULO",
            mensagem: "Sucesso: Valor de venda do veiculo.",
            valorFinalVeiculo: custoFinal,
        }
    )
});

router.post('/ex05', (req, res) => {
    const custoFabricacao = parseInt(req.body.custoFabricacao) || 0
    const percentualImposto = parseFloat(((parseInt(req.body.percentualImposto) || 0) / 100) * custoFabricacao)
    const percentualDistribuidor = parseFloat(((parseInt(req.body.percentualDistribuidor) || 0) / 100) * custoFabricacao)
    const custoFinal = (custoFabricacao + percentualImposto + percentualDistribuidor);

    res.status(200).json(
        {
            codigo: "VALOR_VENDA_VEICULO",
            mensagem: "Sucesso: Valor de venda do veiculo.",
            custoFabricacao: custoFabricacao,
            percentualImposto: percentualImposto,
            percentualDistribuidor: percentualDistribuidor,
            valorFinalVeiculo: custoFinal,

        }
    )
});

router.post('/ex06', (req, res) => {
    const carrosVendidos = parseInt(req.body.carrosVendidos) || 0
    const comissaoVendaCarros = parseInt(req.body.comissaoVendaCarros) || 0
    const valorTotalVendas = carrosVendidos * comissaoVendaCarros
    const salarioFuncionario = parseInt(req.body.salarioFuncionario) || 0
    const ValorCarroVendido = valorTotalVendas * 5 / 100;
    const salario = valorTotalVendas + salarioFuncionario + ValorCarroVendido

    res.status(200).json(
        {
            codigo: "VALOR_SALARIO_VENDEDOR",
            mensagem: "Sucesso: Valor final do vendedor.",
            salarioFinalVendedor: salario,
        }
    )
});

router.post('/ex07', (req, res) => {
    const nota1 = parseInt(req.body.valorNota1) || 0
    const nota2 = parseInt(req.body.valorNota2) || 0

    const pesoNota1 = 40 / 100;
    const pesoNota2 = 60 / 100;

    const media = (nota1 * pesoNota1 + nota2 * pesoNota2)

    res.status(200).json(
        {
            codigo: "MEDIA_NOTAS_ALUNO",
            mensagem: "Sucesso: Média das notas do aluno.",
            salarioFinalVendedor: media,
        }
    )
});

router.post('/ex08', (req, res) => {
    const pi = Math.PI /* Função chique */
    const raio = parseInt(req.body.valorRaio) || 0
    const altura = parseInt(req.body.valorAltura) || 0
    const volume = parseFloat(pi * (raio ** 2) * altura).toFixed(2)

    res.status(200).json(
        {
            codigo: "MEDIA_NOTAS_ALUNO",
            mensagem: "Sucesso: Volume da caixa",
            volumeCaixa: volume,
        }
    )
});

router.post('/ex09', (req, res) => {
    const num01 = parseInt(req.body.valor1) || 0
    const num02 = parseInt(req.body.valor2) || 0
    const resultado = (num01 + num02) * num01;

    res.status(200).json(
        {
            codigo: "MEDIA_NOTAS_ALUNO",
            mensagem: "Sucesso: Soma de dois números.",
            resultadoSoma: resultado,
        }
    )
});

// Exportar o roteador
module.exports = router;