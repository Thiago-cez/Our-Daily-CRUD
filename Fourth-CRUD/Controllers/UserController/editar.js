const serviceUser = require('../../Services/UserService/editar')

async function edit(req,res) {
    let {
        id,
        nome,
        empresa,
        sexo,
        idade,
        admin
    } = req.body;

    let e = serviceUser.editar(id, nome, empresa, sexo, idade, admin)

    res.json(e)
}


module.exports = {
    edit
}