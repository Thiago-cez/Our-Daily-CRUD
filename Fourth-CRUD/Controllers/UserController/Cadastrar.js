const userService = require("../../Services/UserService/cadastrar");

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











module.exports = {
    cad
}