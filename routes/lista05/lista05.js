const express = require('express');
const router = express.Router();

// Definir rotas para usuários
router.get('/', (req, res) => {
    res.send('Exercicios lista 05');
});


/*
    Faça um programa que receba uma quantidade N de números e informe a média de todos os números.
*/

router.post('/ex01', (req, res) => {
    const numeros = req.body.numeros

    let somaNumeros = 0

    for (i = 0; i < numeros.length; i++) {
        somaNumeros += numeros[i]
    }

    const media = somaNumeros / numeros.length

    res.status(200).json(
        {
            codigo: "BONIFICACAO_FILHOS",
            media: media
        }
    )

});

/*
    Faça um programa que leia 100 valores e no final, escreva o maior e o menor valor lido
*/

router.post('/ex02', (req, res) => {
    const numeros = []
    for (let i = 0; i < 100; i++) {

        /* 300 é o max */
        let numeroAleatorio = Math.floor(Math.random() * 300) + 1;
        numeros.push(numeroAleatorio)
    }

    let menor = Math.min(...numeros);
    let maior = Math.max(...numeros);

    res.status(200).json(
        {
            codigo: "NUMEROS",
            menor: menor,
            maior: maior
        }
    )

});

/*
   Escreva um script para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem crescente.
*/


router.post('/ex03', (req, res) => {
    const numeros = []

    for (i = 1; i < 10; i += 1) {
        numeros.push(i)
    }

    res.status(200).json(
        {
            codigo: "NUMEROS_CRESCENTES",
            numeros: numeros
        }
    )

});

/*
   Escreva um script para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
*/

router.post('/ex04', (req, res) => {
    const numeros = []

    for (i = 10; i > 0; i -= 1) {
        numeros.push(i)
    }

    res.status(200).json(
        {
            codigo: "NUMEROS_DECRESCENTES",
            numeros: numeros
        }
    )

});

/*
   Escreva um script para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
*/

router.post('/ex05', (req, res) => {
    const numerosInteiros = []
    for (let i = 101; i < 111; i++) {
        numerosInteiros.push(i)
    }

    res.status(200).json(
        {
            codigo: "NUMEROS_INTEIROS",
            numerosInteiros: numerosInteiros
        }
    )

});

/*
   Escreva um script para ler 10 números e ao final da leitura escrever a soma total dos 10 números lidos.
*/

router.post('/ex06', (req, res) => {
    const numeros = req.body.numeros
    let numerosSomados = 0

    for (n in numeros) {
        numerosSomados += numeros[n]
    }

    res.status(200).json(
        {
            codigo: "NUMEROS_SOMADOS",
            numerosSomados: numerosSomados
        }
    )

});

/*
   Ler um valor N e imprimir todos os valores pares entre 1 (inclusive) e N (inclusive).
*/

router.post('/ex07', (req, res) => {
    const numero = req.body.numero
    const numerosPares = []

    for (i = 1; i < numero; i += 1) {
        if (i % 2 == 0) {
            numerosPares.push(i)
        }
    }

    res.status(200).json(
        {
            codigo: "NUMEROS_PARES",
            numerosPares: numerosPares
        }
    )

});

/*
    Ler 10 valores e escrever quantos desses valores lidos são NEGATIVOS.
*/

router.post('/ex08', (req, res) => {
    const numeros = req.body.numeros
    let quantidadeNumerosImpares = 0

    for (i = 0; i < 10; i += 1) {
        if (numeros[i] % 2 == 1) {
            quantidadeNumerosImpares += 1
        }
    }

    res.status(200).json(
        {
            codigo: "QTD_NUMEROS_IMPARES",
            quantidadeNumerosImpares: quantidadeNumerosImpares
        }
    )

});

/*
    Ler 10 valores e escrever quais são os valores são NEGATIVOS.
*/

router.post('/ex09', (req, res) => {
    const numeros = req.body.numeros
    const numerosImpares = []

    for (i = 0; i < 10; i += 1) {
        if (numeros[i] % 2 == 1) {
            numerosImpares.push(numeros[i])
        }
    }

    res.status(200).json(
        {
            codigo: "NUMEROS_IMPARES",
            numerosImpares: numerosImpares
        }
    )

});

/*
   Ler 10 valores e escrever quantos desses valores lidos estão no intervalo [10,20] e quantos deles estão fora deste intervalo.
*/

router.post('/ex10', (req, res) => {
    const numeros = req.body.numeros
    let quantidadeNumerosDentro = 0
    let quantidadeNumerosFora = 0

    for (i = 0; i < 10; i += 1) {
        if (numeros[i] >= 10 && numeros[i] <= 20) {
            quantidadeNumerosDentro += 1
        } else {
            quantidadeNumerosFora += 1

        }
    }

    res.status(200).json(
        {
            codigo: "NUMEROS_DENTRO_FORA_RAGE",
            numerosDentro: quantidadeNumerosDentro,
            numerosFora: quantidadeNumerosFora
        }
    )

});


/*
    Ler 10 valores, calcular e escrever a média aritmética desses valores lidos.
*/

router.post('/ex11', (req, res) => {
    const numeros = req.body.numeros
    let somaValores = 0

    for (i = 0; i < 10; i += 1) {
        somaValores += numeros[i]
    }

    let media = somaValores / 10;

    res.status(200).json(
        {
            codigo: "MEDIA_NUMEROS",
            media: media.toFixed(3),
        }
    )

});

/*
   Ler 10 valores e escrever quantos desses valores lidos estão no intervalo [10,20] e quantos deles estão fora deste intervalo.
*/

router.post('/ex12', (req, res) => {
    const numeros = req.body.numeros
    let somaValores = 0

    for (i = 0; i < numeros.length; i += 1) {
        somaValores += numeros[i]
    }

    let media = somaValores / numeros.length;

    res.status(200).json(
        {
            codigo: "MEDIA_NUMEROS",
            media: media.toFixed(3),
        }
    )
});

/*
    Faça um script que leia um número N correspondente ao número de valores a serem lidos em seguida. Para cada número lido, imprimir o seu triplo.
*/

router.post('/ex13', (req, res) => {
    const numero = req.body.numero
    const numerosApos = []

    for (i = 0; i < numero; i += 1) {
        numerosApos.push(i * 3)
    }

    res.status(200).json(
        {
            codigo: "NUMEROS",
            numerosApos: numerosApos,
        }
    )

});

/*
   Faça um script que leia 30 números positivos e, para cada número lido, imprima seu dobro.
*/

router.post('/ex14', (req, res) => {
    const numeros = req.body.numeros
    const numerosDobro = []

    for (let i = 0; i < 30; i++) {
        numerosDobro.push(numeros[i] * 2);
    }

    res.status(200).json(
        {
            codigo: "NUMEROS_DOBR",
            numerosDobro: numerosDobro,
        }
    )

});

/*
    Escreva um script para ler 10 números. Todos os números lidos com valor inferior a 40 devem ser somados. Escreva o valor final da soma efetuada.
*/

router.post('/ex15', (req, res) => {
    const numeros = req.body.numeros
    const somaNumeros = []

    for (let i = 0; i < 10; i++) {
        if (numeros[i] < 40) {
            somaNumeros += numeros[i];
        }
    }

    res.status(200).json(
        {
            codigo: "SOMA_NUMEROS",
            somaNumeros: somaNumeros,
        }
    )

});

/*

   Uma loja está levantando o valor total de todas as mercadorias em estoque. Escreva um script que permita a entrada das seguintes informações:
        a) o número total de mercadorias no estoque;
        b) o valor de cada mercadoria.
        
        Ao final imprimir o valor total em estoque e a média de valor das mercadorias.
*/

router.post('/ex16', (req, res) => {
    const numeroMercadorias = req.body.numeroMercadorias
    const valores = req.body.valores
    let estoqueTotal = 0;

    for (let i = 0; i < valores.length; i++) {
        estoqueTotal += valores[i]
    }

    const mediaValor = estoqueTotal / numeroMercadorias;


    res.status(200).json(
        {
            codigo: "BALANCO_TOTAL",
            estoqueTotal: estoqueTotal,
            mediaValor: mediaValor,
        }
    )

});

/*
  Faça um script que gere e escreva os números ímpares dentro de um intervalo digitado pelo usuário. 
  O script deve exibir também a soma destes números.
*/

router.post('/ex17', (req, res) => {
    const valorInicial = req.body.valorInicial
    const valorFinal = req.body.valorFinal
    const numerosImpares = []
    let somaImpares = 0

    for (let i = valorInicial; i <= valorFinal; i++) {
        if (i % 2 !== 0) {
            numerosImpares.push(i);
            somaImpares += i;
        }
    }

    res.status(200).json(
        {
            codigo: "NUMEROS_IMPARES",
            numerosImpares: numerosImpares,
            somaImpares: somaImpares,
        }
    )

});

/*
  Faça um programa que leia 30 valores inteiros e imprima:
    - O maior valor lido;
    - O menor valor lido;
    - A média dos valores lidos.
*/

router.post('/ex18', (req, res) => {
    const numeros = req.body.numeros

    let menor = Math.min(...numeros);
    let maior = Math.max(...numeros);
    let somaNumeros = 0;

    for (let i = 0; i < numeros.length; i++) {
        somaNumeros += numeros[i];
    }

    const media = somaNumeros / numeros.length;

    res.status(200).json(
        {
            codigo: "NUMEROS_DOBR",
            media: media,
            maior: maior,
            menor: menor,
        }
    )

});

/*
    Um total de 500 alunos de uma universidade foram entrevistados.
    De cada um deles foram coletadas as seguintes informações: 
    o código do curso que frequenta (
        1-sistemas de informação; 
        2-ciência da computação; 
        3-engenharia civil) e a idade. 
        
    Faça um programa que processe estes dados e que forneça as seguintes informações:
        - Número de alunos por curso;
        - Número de alunos com idade entre 20 e 25 anos, por curso; e
        - Qual o curso com menor média de idade.
*/

router.post('/ex19', (req, res) => {
    const alunos = req.body.alunos;

    const cursos = {
        1: "Sistemas de Informação",
        2: "Ciência da Computação",
        3: "Engenharia Civil",
    };

    let totalAlunosCurso = { 1: 0, 2: 0, 3: 0 };

    let alunosIdade2025Curso = { 1: 0, 2: 0, 3: 0 };

    let somaIdadeCurso = { 1: 0, 2: 0, 3: 0 };

    let totalAlunos = 0;
    let menorMediaIdade = Infinity;
    let cursoMenorMediaIdade = "";

    for (let i = 0; i < alunos.length; i++) {
        const aluno = alunos[i];
        const curso = aluno.curso;
        const idade = aluno.idade;

        totalAlunos++;
        totalAlunosCurso[curso]++;

        if (idade >= 20 && idade <= 25) {
            alunosIdade2025Curso[curso]++;
        }

        somaIdadeCurso[curso] += idade;
    }

    for (let curso in somaIdadeCurso) {
        const mediaIdade = somaIdadeCurso[curso] / totalAlunosCurso[curso];
        if (mediaIdade < menorMediaIdade) {
            menorMediaIdade = mediaIdade;
            cursoMenorMediaIdade = cursos[curso];
        }
    }

    res.status(200).json(
        {
            codigo: "DADOS_ALUNOS",
            totalAlunosCurso: totalAlunosCurso,
            alunosIdade2025Curso: alunosIdade2025Curso,
            cursoMenorMediaIdade: cursoMenorMediaIdade,
        }
    )

});

/*
    Faça um programa que imprima uma tabuada para os números de 1 a 10.
*/

router.post('/ex20', (req, res) => {
    let tabuada = [];
    for (let i = 1; i <= 10; i++) {
        let tabuadaItem = { numero: i, multiplicacoes: [] };
        for (let j = 1; j <= 10; j++) {
            let resultado = i * j;
            tabuadaItem.multiplicacoes.push(`${i} x ${j} = ${resultado}`);
        }
        tabuada.push(tabuadaItem);
    }

    res.status(200).json(
        {
            codigo: "TABUADA",
            tabuada: tabuada,
        }
    )

});

/*
  Foi realizada uma pesquisa de opinião com 200 pessoas que assistiram a uma peça de teatro. 
  Cada espectador respondeu a um questionário que solicitava os seguintes dados:
    - Idade da pessoa;
    - O nome da pessoa;
    - Nota dada à peça (de 0 a 10).

    Faça um programa que, a partir destes dados, calcule e imprima:
        - a. A quantidade de respostas 10.
        - b. A média de idade das pessoas que responderam o questionário.
        - c. A percentagem de pessoas que responderam 5 ou menos para a nota da peça.
        - d. O nome da pessoa mais velha.
        
        Obs.: Considere que a maior idade não é repetida.
*/

router.post('/ex21', (req, res) => {
    const respostas = req.body.respostas;

    let quantidadeDez = 0;
    let totalDeIdade = 0;
    let totalDePessoas = 0;
    let quantidadeDeCincoOuMenos = 0;
    let nomePessoaMaisVelha = "";
    let maiorIdade = -1;

    for (let i = 0; i < respostas.length; i++) {
        const resposta = respostas[i];
        const idade = resposta.idade;
        const nome = resposta.nome;
        const nota = resposta.nota;

        if (nota === 10) {
            quantidadeDez++;
        }

        totalDeIdade += idade;
        totalDePessoas++;

        if (nota <= 5) {
            quantidadeDeCincoOuMenos++;
        }

        if (idade > maiorIdade) {
            maiorIdade = idade;
            nomePessoaMaisVelha = nome;
        }
    }

    const mediaIdade = totalDeIdade / totalDePessoas;
    const percentualCincoOuMenos =
        (quantidadeDeCincoOuMenos / totalDePessoas) * 100;

    res.status(200).json({
        codigo: "PESQUISA_RESULTADO",
        quantidadeDez: quantidadeDez,
        mediaIdade: mediaIdade,
        percentualCincoOuMenos: percentualCincoOuMenos,
        nomePessoaMaisVelha: nomePessoaMaisVelha,
    });

});

/*
  Faça um programa que leia 30 valores inteiros e imprima:
    - O maior valor lido;
    - O menor valor lido;
    - A média dos valores lidos.
*/

router.post('/ex22', (req, res) => {
    const produtos = req.body.produtos;

    const menorPreco = Math.min(...produtos);
    const maiorPreco = Math.max(...produtos);

    for (let i = 1; i < produtos.length; i++) {
        const preco = produtos[i].preco;

        somaPrecos += preco;
    }

    const mediaPrecos = somaPrecos / produtos.length;

    res.status(200).json(
        {
            codigo: "MEDIA_PRECOS",
            mediaPrecos: mediaPrecos,
            maiorPreco: maiorPreco,
            menorPreco: menorPreco
        }
    )

});


module.exports = router;