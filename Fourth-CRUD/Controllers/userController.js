const userService = require("../Services/userService");

async function cad( req,res ){
    let {
        nome,
        empresa,
        sexo,
        idade,
        admin
    } = req.body;

    let nc = await userService.cadastrar(nome,
        empresa,
        sexo,
        idade, 
        admin
        );

    res.json(nc);
}

async function list(req, res) {
   res.json(await userService.listar());


}

async function edit(req,res) {
    let {
        id,
        nome,
        empresa,
        sexo,
        idade,
        admin
    } = req.body;

    let e = userService.editar(id, nome, empresa, sexo, idade, admin)

    res.json(e)
}

async function del(req, res) {
    let id = req.body.id;
    let d = userService.deletar(id);

    res.json(d)
}






module.exports = {
    cad,
    list,
    edit,
    del
}