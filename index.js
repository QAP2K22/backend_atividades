const express = require('express')
const app = express()
const userRoutes = require('./routes/lista02/lista02');

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/lista02', userRoutes);

app.get('/', function (req, res) {
    res.send('Rota Principal')
})

app.get('/nome', function (req, res) {
    res.send('Orion Teles de Mesquita')
})

app.listen(3000, function () {
    console.log('Server UP port 3000')
})