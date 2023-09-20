const Produto = require('../../DataBase/model/Produto');


async function cadastro(marca,modelo,ano,preco) {
let novoProduto = new Produto({marca, modelo, ano, preco })

   await novoProduto.save()
   .then(console.log("Cadastrado com Sucesso"))
   .catch((error) => error)
}





module.exports = {
    cadastro
}