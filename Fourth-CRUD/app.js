const express = require('express');
const mongoose = require('mongoose');
const UsuarioRotas = require('./Routers/usuarioRouter')

const port = 3000;

const app = express();

app.use(express.json());


app.use('/usuario', UsuarioRotas.router);




//Conecta Com o Banco de Dados
const connectionString ="mongodb+srv://jao:QZLxjey44YjIBhFl@cluster0.p9pacqw.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(connectionString);




//conexão do Servidor
app.listen(3000, () => {
    console.log(`Servidor Rodando na porta ${port}`)
})