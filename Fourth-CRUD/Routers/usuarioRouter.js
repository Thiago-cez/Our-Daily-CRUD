const express = require('express');
const controllerUser = require('../Controllers/userController');
const router = express.Router();



router.post('/cadastrar',controllerUser.cad);




module.exports = {
    router
}

