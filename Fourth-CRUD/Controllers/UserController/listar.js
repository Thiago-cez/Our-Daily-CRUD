const serviceUser = require('../../Services/UserService/listar')

async function list(req, res) {
    res.json(await serviceUser.listar());
 
 
 }

 module.exports = {
    list
 }