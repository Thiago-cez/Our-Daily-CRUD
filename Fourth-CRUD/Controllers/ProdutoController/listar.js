const serviceProduto = require('../../Services/produtoService/listar')

async function list(req, res){
    res.json(await serviceProduto.listar())
   }

module.exports = {
    list
}
   