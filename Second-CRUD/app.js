const express  = require('express');
const app = express()
app.use(express.json());

const port = 3000;

const animais  = require('./Routers/animais')

app.use('/animais', animais.rota)











app.listen(port, () => {
    console.log(`Servidor Rodando na porta ${port}`)
})