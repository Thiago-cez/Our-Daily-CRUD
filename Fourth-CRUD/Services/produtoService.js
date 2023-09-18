const Produto = require('../model/Produto');


async function cadastro(marca,modelo,ano,preco) {
let novoProduto = new Produto({marca, modelo, ano, preco })

   await novoProduto.save()
   .then(console.log("Cadastrado com Sucesso"))
   .catch((error) => error)
}


async function listar(){
    return await Produto.find({})
}



module.exports = {
    cadastro,
    listar
}