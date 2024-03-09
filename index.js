const express = require('express')
const app = express()
const lista01 = require('./routes/lista01/lista01');
const lista02 = require('./routes/lista02/lista02');
const lista03 = require('./routes/lista03/lista03');
const lista04 = require('./routes/lista04/lista04');
const lista05 = require('./routes/lista05/lista05');

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/lista01', lista01)
app.use('/lista02', lista02)
app.use('/lista03', lista03);
app.use('/lista04', lista04);
app.use('/lista05', lista05);

app.get('/', function (req, res) {
    res.send('Rota Principal')
})


app.listen(3000, function () {
    console.log('Server UP port 3000')
})