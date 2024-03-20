const express = require('express');
const router = express.Router();

// Definir rotas para usuários
router.get('/', (req, res) => {
    res.send('Exercicios lista 03');
});


/*
    Faça um script para calcular o estoque médio de uma peça, sendo que ESTOQUE MÉDIO = (QUANTIDADE MÍNIMA + QUANTIDADE MÁXIMA) /2.
*/

router.post('/ex01', (req, res) => {
    const estoqueMinimo = parseInt(req.body.estoqueMinimo)
    const estoqueMaximo = parseInt(req.body.estoqueMaximo)

    res.status(200).json(
        {
            codigo: "ESTOQUE_MEDIO",
            estoqueMedio: (estoqueMinimo + estoqueMaximo) / 2
        }
    )
});

/*
    Escrever um script que lê o nome de um funcionário, o número de horas trabalhadas, o valor que recebe por hora e o número de filhos. 
    Com estas informações, calcular o salário deste funcionário, sabendo que para cada filho, o funcionário recebe 3% a mais, calculado sobre o salário bruto.
*/

router.post('/ex02', (req, res) => {
    const nomeFuncionario = req.body.nomeFuncionario
    const horasTrabalhadas = parseInt(req.body.horasTrabalhadas)
    const valorHora = parseInt(req.body.valorHora)
    const quantidadeFilhos = parseInt(req.body.quantidadeFilhos)

    const salarioBruto = horasTrabalhadas * valorHora
    const bonificacaoFilhos = 0.03 * salarioBruto * quantidadeFilhos
    const salarioFinal = salarioBruto + bonificacaoFilhos

    res.status(200).json(
        {
            codigo: "SALARIO_FINAL_FUNCIONAL",
            nomeFuncionario: nomeFuncionario,
            salarioBruto: salarioBruto,
            salarioFinal: salarioFinal,
            bonificacaoFilhos: bonificacaoFilhos,

        }
    )
});

/*
    Faça um script que leia a idade de uma pessoa expressa em anos, meses e dias e mostre-a expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.
*/

router.post('/ex03', (req, res) => {
    const idadeEmDias = parseInt(req.body.idadeEmDias)
    const idadeEmAnos = parseInt(req.body.idadeEmAnos)
    const idadeEmMeses = parseInt(req.body.idadeEmMeses)

    const anosParaDias = idadeEmAnos * 365
    const mesesParaDias = idadeEmMeses * 30

    res.status(200).json(
        {
            codigo: "IDADE_EM_DIAS",
            idadeEmDias: (anosParaDias + mesesParaDias + idadeEmDias)
        }
    )

});

/*
    Faça um script que leia a idade de uma pessoa expressa em dias e mostre-a expressa em anos, meses e dias. Considerar ano com 365 dias e mês com 30 dias.
*/

router.post('/ex04', (req, res) => {
    const idadeEmDias = parseInt(req.body.idadeEmDias)


    const diasParaAnos = parseInt(idadeEmDias / 365)
    const diasParaMeses = parseInt((idadeEmDias % 365) / 30)
    const dias = (idadeEmDias % 365) % 30;

    res.status(200).json(
        {
            codigo: "IDADE_EM_DIAS_MESES_ANOS",
            anos: diasParaAnos,
            meses: diasParaMeses,
            dias: dias
        }
    )
})

/*
    Faça um script que leia as 3 notas de um aluno e calcule a média final deste aluno.
    Considerar que a média é ponderada e que o peso das notas é: 2, 3 e 5, respectivamente.
*/

router.post('/ex05', (req, res) => {
    const nota01 = Number(req.body.nota1)
    const nota02 = Number(req.body.nota2)
    const nota03 = Number(req.body.nota3)

    const peso1 = 2
    const peso2 = 3 
    const peso3 = 5

    const nota01Ponderada = nota01 * peso1
    const nota02Ponderada = nota02 * peso2
    const nota03Ponderada = nota03 * peso3

    const mediaFinal = (nota01Ponderada + nota02Ponderada + nota03Ponderada) / (peso1 + peso2 + peso3);

    res.status(200).json(
        {
            codigo: "MEDIA_NOTAS",
            media: mediaFinal
        }
    )
});

/*
Faça um script que leia o tempo de duração de um evento em uma fábrica expressa em segundos e mostre-o expresso em horas, minutos e segundos.
*/

router.post('/ex06', (req, res) => {
    const duracaoEvento = Number(req.body.duracaoEvento)

    const segundosParaHoras = Math.floor(duracaoEvento / 3600)
    const segundosParaMinutos = Math.floor((duracaoEvento % 3600) / 60)
    const segundos = Math.floor(duracaoEvento % 60);
    res.status(200).json(
        {
            codigo: "TEMPO_DURACAO_EVENTO",
            horas: segundosParaHoras,
            minutos: segundosParaMinutos,
            segundos: segundos,
        }
    )
});

/*
    Escrever um script que lê o nome de um funcionário, o número de horas trabalhadas, o valor que recebe por hora e o número de filhos. 
    Com estas informações, calcular o salário deste funcionário, sabendo que para cada filho, o funcionário recebe 3% a mais, calculado sobre o salário bruto.
*/

router.post('/ex07', (req, res) => {
    const nomeFuncionario = req.body.nomeFuncionario
    const horasTrabalhadas = parseInt(req.body.horasTrabalhadas)
    const valorHora = parseInt(req.body.valorHora)
    const quantidadeFilhos = parseInt(req.body.quantidadeFilhos)

    const salarioSemBonus = horasTrabalhadas * valorHora
    const salarioComBonus = salarioSemBonus + (salarioSemBonus * (0.03 * quantidadeFilhos))

    res.status(200).json(
        {
            codigo: "SALARIO_FINAL",
            nome: nomeFuncionario,
            salario: salarioComBonus
        }
    )
});

/*
  Faça um script que leia o nome de um piloto, uma distância percorrida em km e o tempo que o piloto levou para percorrê-la (em horas). 
  O programa deve calcular a velocidade média - Velocidade = Distância / Tempo - em km/h, e exibir a seguinte frase: A velocidade média do <nome do piloto> foi <velocidade media calculada> km/h.
*/

router.post('/ex08', (req, res) => {
    const nomePiloto = req.body.nomePiloto
    const distanciaPercorrida = Number(req.body.distanciaPercorrida)
    const tempoPercorrido = Number(req.body.tempoPercorrido)

    const velocidadeMedia = distanciaPercorrida / tempoPercorrido

    res.status(200).json(
        {
            codigo: "TEMPO_PILOTO",
            mensagem: `A velocidade média do ${nomePiloto} foi de ${velocidadeMedia.toFixed(2)} km/h.`
        }
    )
});

/*
    Uma empresa decide dar um aumento de 30% aos funcionários cujo salário é inferior a 1.000 reais. 
    Escreva um Programa que receba o salário de um funcionário e imprima o valor do salário reajustado ou uma mensagem caso o funcionário não tenha direito ao aumento.
*/

router.post('/ex09', (req, res) => {
    const salarioFuncionario = parseInt(req.body.salarioFuncionario)
    const porcentagemAumento = 30 / 100

    if (salarioFuncionario < 1000) {
        res.status(200).json(
            {
                codigo: "REAJUSTE_SALARIO",
                status: "APROVADO",
                salarioReajustado: salarioFuncionario + (salarioFuncionario * porcentagemAumento)
            }
        )

    } else {
        res.status(401).json(
            {
                codigo: "REAJUSTE_SALARIO",
                status: "NEGADO",
            }
        )
        /* Código HTTP não tem muito sentido, mas fica legal nesse contexto.*/
    }
});


module.exports = router;