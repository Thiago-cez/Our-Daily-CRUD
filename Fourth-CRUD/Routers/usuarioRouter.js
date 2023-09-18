const express = require('express');
const controllerUser = require('../Controllers/userController');
const router = express.Router();



router.post('/cadastrar',controllerUser.cad);
router.get('/listar', controllerUser.list);
router.put('/editar', controllerUser.edit);
router.delete('/deletar', controllerUser.del)




module.exports = {
    router
}

