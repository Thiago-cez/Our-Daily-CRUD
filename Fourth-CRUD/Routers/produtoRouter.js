const cadastrar = require('../Controllers/produtoController/cadastrar');
const listar = require('../Controllers/produtoController/listar');
const express = require('express')

const routerP = express.Router()


routerP.post('/cadastrar', cadastrar.cadastrar);
routerP.get('/listar', listar.list)







module.exports = {
    routerP
}