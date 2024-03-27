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
    const salario = Number(req.body.salario)
    let reajusteSalario = 0
    if (salario <= 2000) {
        reajusteSalario = salario + (salario * 0.5)
    } else {
        reajusteSalario = salario + (salario * 0.3)

    }
    res.status(200).json(
        {
            codigo: "REAJUSTE_SALARIO",
            salario: salario,
            salarioFinal: reajusteSalario
        }
    )
});

/*
   Faça um script que leia 3 números inteiros e verifique qual o maior, imprimindo o resultado (suponha números diferentes).
*/

router.post('/ex02', (req, res) => {
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)
    const num3 = Number(req.body.num3)

    let maiorNumero = num1

    if (num2 > maiorNumero) {
        maiorNumero = num2
    } else if (num3 > maiorNumero) {
        maiorNumero = num3
    }

    res.status(200).json(
        {
            codigo: "NUMERO_INTEIRO_MAIOR",
            maiorNumero: maiorNumero
        }
    )

});

/*
    Em uma pizzaria, cada tulipa de chopp custa R$ 4,80 e uma pizza mista grande custa R$17,00, mais R$1,50 por tipo de cobertura pedida (queijo, presunto, banana, etc.).
    Uma turma vai à pizzaria e pede uma determinada quantidade de "chopps" e uma pizza grande com uma determinada quantidade de coberturas.
    Faça um algoritmo que calcule a conta e, sabendo quantas pessoas estão à mesa, quanto que cada um deve pagar (não esqueça os 10% do garçom).
*/

router.post('/ex03', (req, res) => {
    const quantidadeCobertura = req.body.quantidadeCobertura
    const quantidadeChopp = req.body.quantidadeChopp
    const quantidadePessoas = req.body.quantidadePessoas

    const precoChopp = 4.80;
    const precoPizza = 17.00;
    const precoCobertura = 1.50;
    const taxaGarcom = 0.1;

    const conta = (quantidadeChopp * precoChopp) + (precoPizza + (quantidadeCobertura * precoCobertura))

    const contaFinalComAdicionalGarcom = (conta * (1 + taxaGarcom)).toFixed(2)
    const divisaoConta = contaFinalComAdicionalGarcom / quantidadePessoas

    res.status(200).json(
        {
            codigo: "CONTA_FINAL_PIZZARIA",
            contaFinalComAdicionalGarcom: contaFinalComAdicionalGarcom,
            divisaoConta: divisaoConta
        }
    )

});

/*
    Faça uma Programa que receba o valor do salário mínimo, o número de horas trabalhadas, o número de dependentes do funcionário e a quantidade de horas extras trabalhadas. 
    Calcule e imprima o salário a receber do funcionário seguindo as regras abaixo:
*/

router.post('/ex04', (req, res) => {
    const salarioMinimo = req.body.salarioMinimo
    const horasExtras = req.body.horasExtras
    const depentes = req.body.depentes
    const horasTrabalhadas = req.body.horasTrabalhadas

    const valoresHorasTrabalhadas = salarioMinimo * 0.2
    const salarioMes = valoresHorasTrabalhadas * horasTrabalhadas
    const valorDependente = depentes * 32
    const valorHoraExtra = valoresHorasTrabalhadas * 1.5 * horasExtras
    const salarioBruto = salarioMes + valorDependente + valorHoraExtra

    let imposto = 0

    if (salarioBruto >= 5000) {
        imposto = salarioBruto * 0.2
    } else if (salarioBruto >= 2000) {
        imposto = salarioBruto * 0.1
    }


    const salarioLiquido = salarioBruto - imposto
    const gratificacao = salarioBruto < 3500 ? 1000 : 500
    const salarioReceber = salarioBruto + salarioLiquido + gratificacao

    res.status(200).json(
        {
            codigo: "SALARIO_FUNCIONARIO",
            salarioBruto,
            imposto,
            gratificacao,
            salarioReceber
        }
    )
})

/*
    Construa um programa que leia o número de identificação do aluno, as 3 notas obtidas pelo aluno nas 3 provas e a média dos exercícios que fazem parte da avaliação.
    Calcular a média de aproveitamento, usando a fórmula:

    M A = (Nota1 + Nota2 * 2 + Nota3 * 3 + ME )/7
*/

router.post('/ex05', (req, res) => {
    const matriculaAluno = req.body.matriculaAluno
    const nota1 = req.body.nota1
    const nota2 = req.body.nota2
    const nota3 = req.body.nota3
    const mediaExercicios = req.body.mediaExercicios

    const mediaAproveitamento = ((nota1 + nota2 * 2 + nota3 * 3 + mediaExercicios) / 7).toFixed(2)

    if (mediaAproveitamento >= 9) {
        res.status(200).json(
            {
                codigo: "MEDIA_ALUNO",
                situacao: "APROVADO",
                conceito: "A",
                matriculaAluno: matriculaAluno,
                nota1: nota1,
                nota2: nota2,
                nota3: nota3,
                mediaExercicios: mediaExercicios,
                mediaAproveitamento: mediaAproveitamento
            }
        )
    } else if (mediaAproveitamento >= 7.5) {
        res.status(200).json(
            {
                codigo: "MEDIA_ALUNO",
                situacao: "APROVADO",
                conceito: "B",
                matriculaAluno: matriculaAluno,
                nota1: nota1,
                nota2: nota2,
                nota3: nota3,
                mediaExercicios: mediaExercicios,
                mediaAproveitamento: mediaAproveitamento
            }
        )

    } else if (mediaAproveitamento >= 6.0) {
        res.status(200).json(
            {
                codigo: "MEDIA_ALUNO",
                situacao: "APROVADO",
                conceito: "C",
                matriculaAluno: matriculaAluno,
                nota1: nota1,
                nota2: nota2,
                nota3: nota3,
                mediaExercicios: mediaExercicios,
                mediaAproveitamento: mediaAproveitamento
            }
        )
    } else if (mediaAproveitamento >= 4) {
        res.status(200).json(
            {
                codigo: "MEDIA_ALUNO",
                situacao: "REPROVADO",
                conceito: "D",
                matriculaAluno: matriculaAluno,
                nota1: nota1,
                nota2: nota2,
                nota3: nota3,
                mediaExercicios: mediaExercicios,
                mediaAproveitamento: mediaAproveitamento
            }
        )
    } else {
        res.status(200).json(
            {
                codigo: "MEDIA_ALUNO",
                situacao: "REPROVADO",
                conceito: "E",
                matriculaAluno: matriculaAluno,
                nota1: nota1,
                nota2: nota2,
                nota3: nota3,
                mediaExercicios: mediaExercicios,
                mediaAproveitamento: mediaAproveitamento
            }
        )
    }


    /*usa array :cry: */

});

/*
    Construa um script que calcule o peso ideal de uma pessoa. Dados de entrada: altura e sexo.
    Fórmulas para cálculo do peso:
    - peso ideal de homem = (72,7 x altura) – 58
    - peso ideal da mulher = (62,1 x altura) – 44,7
*/

router.post('/ex06', (req, res) => {
    const altura = req.body.altura
    const sexo = req.body.sexo

    let pesoIdeal = 0

    if (sexo == "M" || sexo == "masculino") {
        pesoIdeal = (72.7 * altura) - 58
    } else if (sexo == "F" || sexo == "feminino") {
        pesoIdeal = (62.1 * altura) - 44.7
    }

    res.status(200).json(
        {
            codigo: "PESO_IDEAL",
            pesoIdeal: pesoIdeal.toFixed(2)
        }
    )
});

/*
    Construa um programa que leia 3 valores (considere que não serão informados valores iguais) e calcule a soma dos 2 maiores.
*/

router.post('/ex07', (req, res) => {
    const num1 = Number(req.body.num1)
    const num2 = Number(req.body.num2)
    const num3 = Number(req.body.num3)

    const novaTabela = [num1, num2, num3]

    novaTabela.sort((a, b) => b - a) /* Ordena os valores da tabela em ordem descrecente*/
    const soma = novaTabela[0] + novaTabela[1];

    res.status(200).json(
        {
            codigo: "SOMA_DOIS_MAIORES_NUMEROS",
            soma: soma
        }
    )
});

/*
    Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o cargo, conforme a tabela abaixo. 
    Faça um programa que leia o salário e o código do cargo de um funcionário e calcule o seu novo salário. 
    Se o cargo do funcionário não estiver na tabela, ele deverá receber 15% de aumento. Mostre o salário antigo, o novo salário e a diferença entre ambos.

    Código do Cargo -> Percentual:

    - 101 -> 5%
    - 102 -> 7,5%
    - 103 -> 10%
*/

router.post('/ex08', (req, res) => {
    const codigoCargo = req.body.codigoCargo
    const salarioAtual = req.body.salario
    const porcentagemCargo = {
        [101]: 5,
        [102]: 7.5,
        [103]: 10,
    }

    if (porcentagemCargo[codigoCargo]) {
        res.status(200).json(
            {
                codigo: "SALARIO_NOVO",
                salarioAtual: salarioAtual,
                salarioNovo: (salarioAtual + (salarioAtual * (porcentagemCargo[codigoCargo] / 100)))
            }
        )
    } else {
        res.status(200).json(
            {
                codigo: "SALARIO_NOVO ",
                salarioAtual: salarioAtual,
                salarioNovo: (salarioAtual + (salarioAtual * 0.15))
            }
        )
    }
});


module.exports = router;