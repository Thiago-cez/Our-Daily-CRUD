const express = require('express');
const mongoose = require('mongoose');
const UsuarioRotas = require('./Routers/usuarioRouter');
const produtoRotas = require('./Routers/produtoRouter')

const port = 3000;

const app = express();

app.use(express.json());


app.use('/usuario', UsuarioRotas.router);
app.use('/produto', produtoRotas.routerP);




//conexão do Servidor
app.listen(3000, () => {
    console.log(`Servidor Rodando na porta ${port}`)
})