const pService = require("../Services/produtoService");


async function cadastrar(req,res){
   let {
    marca,
    modelo,
    ano,
    preco } = req.body;

    let newP = await pService.cadastro(marca,
        modelo,
        ano,
        preco )

        res.json(newP)
}


async function list(req, res){
 res.json(await pService.listar())
}




module.exports = {
    cadastrar,
    list
}