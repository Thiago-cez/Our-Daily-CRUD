const express = require('express');
const router = express.Router();
const controllerAnuncio = require('../Controllers/controller')


router.post('/cadastra', controllerAnuncio.createAnuncio);
router.get('/listar', controllerAnuncio.listaAnuncio);





module.exports = {
    router
}