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


module.exports = {
    cad,
    list
}