let cadastrarService = require('../Services/service')


function novoCadastro(req, res){
    let nome = req.body.nome
    let tipo = req.body.tipo
    let raca = req.body.raca
    let cor = req.body.cor
    let idade = req.body.idade
    let peso = req.body.peso
    let altura = req.body.altura 

    let nc = cadastrarService.cadastrar(nome, tipo, raca, cor, idade, peso, altura)

    res.json(nc)
}

module.exports = {
    novoCadastro
}