const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.get('/', function (req, res) {
    res.send('Rota Principal')
})

app.get('/hello', function (req, res) {
    res.send('Chegou a resposta')
})

app.post('/lista01/ex01', function (req, res) {
    let retorno = {}
    const nota1 = parseInt(req.body.nota1)
    const nota2 = parseInt(req.body.nota2)
    const nota3 = parseInt(req.body.nota3)
    const nota4 = parseInt(req.body.nota4)
    const notaFinal = (nota1 + nota2 + nota3 + nota4) / 4

    if (notaFinal >= 7) {
        retorno = {
            codigo: "APROVADO",
            mensagem: "O usuário foi aprovado com sucesso",
            valorNota : notaFinal
        }

        res.status(202).json(retorno)
    } else if (notaFinal < 5) {
        retorno = {
            codigo: "REPROVADO",
            mensagem: "O usuário foi desaprovado com sucesso",
            valorNota : notaFinal
        }
        res.status(200).json(retorno)
    } else {
        retorno = {
            codigo: "RECUPERACAO",
            mensagem: "O usuário foi para a recuperação",
            valorNota : notaFinal
        }
        res.status(200).json(retorno)
    }
})

app.get('/lista01/ex02', function(req, res){
    res.send('')
})

app.get('/nome', function (req, res) {
    res.send('Orion Teles de Mesquita')
})

app.listen(3000, function () {
    console.log('Server UP port 3000')
})