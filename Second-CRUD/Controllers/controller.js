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

function listarPets(req, res){
    res.json(cadastrarService.listar())
}

function editar(req, res){
    let id = req.body.id;
    let nome = req.body.nome
    let tipo = req.body.tipo
    let raca = req.body.raca
    let cor = req.body.cor
    let idade = req.body.idade
    let peso = req.body.peso
    let altura = req.body.altura 

    let a = cadastrarService.editar(id, nome, tipo, raca, cor, idade, peso, altura);

    res.json(a)
}

function excluir(req, res) {
      let id = req.body.id;

      let d = cadastrarService.deletar(id);

      res.send(d);
}







module.exports = {
    novoCadastro,
    listarPets,
    editar,
    excluir
}