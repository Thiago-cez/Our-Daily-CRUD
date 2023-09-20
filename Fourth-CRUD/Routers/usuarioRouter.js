const express = require('express');
const cadastrar = require('../Controllers/UserController/Cadastrar');
const listar = require('../Controllers/UserController/listar');
const editar = require('../Controllers/UserController/editar');
const deletar = require('../Controllers/UserController/deletar');
const router = express.Router();



router.post('/cadastrar',cadastrar.cad);
router.get('/listar', listar.list);
router.put('/editar', editar.edit);
router.delete('/deletar', deletar.del)




module.exports = {
    router
}

