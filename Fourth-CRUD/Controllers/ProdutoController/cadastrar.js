const pService = require("../../Services/produtoService/cadastrar");


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





module.exports = {
    cadastrar
}