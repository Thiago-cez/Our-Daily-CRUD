const express = require('express');
const controller = require('../controllers/controller');
const router = express.Router();

router.post('/cadastrar', controller.cadastrar);
router.get('/listar', controller.listarUsuarios);
router.put('/editar', controller.editarUsuario);
router.delete('/excluir', controller.deleteUsuario);


module.exports = {
    router
}