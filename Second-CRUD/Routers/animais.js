const express = require('express');
const rota = express.Router();

let controllerAnimais = require('../Controllers/controller')

rota.post('/cadastrar', controllerAnimais.novoCadastro)

module.exports = {
    rota
}