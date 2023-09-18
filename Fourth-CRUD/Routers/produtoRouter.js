const produtoController = require('../Controllers/produtoController');
const express = require('express')

const routerP = express.Router()


routerP.post('/cadastrar', produtoController.cadastrar);
routerP.get('/listar', produtoController.list)







module.exports = {
    routerP
}