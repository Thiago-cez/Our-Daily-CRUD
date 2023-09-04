const express = require('express');
const rota = express.Router();

let controllerAnimais = require('../Controllers/controller')

rota.post('/cadastrar', controllerAnimais.novoCadastro)
rota.get('/listar', controllerAnimais.listarPets)




module.exports = {
    rota
}