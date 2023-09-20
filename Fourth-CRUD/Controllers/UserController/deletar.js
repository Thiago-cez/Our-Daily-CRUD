const userService = require('../../Services/UserService/deletar')

async function del(req, res) {
    let id = req.body.id;
    let d = userService.deletar(id);

    res.json(d)
}


module.exports = {
    del
}