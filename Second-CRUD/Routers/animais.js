const express = require('express');
const rota = express.Router();

let controllerAnimais = require('../Controllers/controller')

rota.post('/cadastrar', controllerAnimais.novoCadastro)
rota.get('/listar', controllerAnimais.listarPets)
rota.put('/editar',  controllerAnimais.editar)
rota.delete('/deletar', controllerAnimais.excluir)


module.exports = {
    rota
}