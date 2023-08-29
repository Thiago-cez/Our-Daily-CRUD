const serviceUsuario = require('../services/service');

function cadastrar(req, res){
    
    let id = req.body.id; 
    let nome = req.body.nome;
    let idade = req.body.idade;
    let nacionalidade = req.body.nacionalidade;
    let time = req.body.time;

    let nc = serviceUsuario.novoCadastro(id, nome, idade, nacionalidade, time);

    res.json(nc);
}

function listarUsuarios(req,res) {
    res.json(serviceUsuario.listar());
}



function editarUsuario(req, res) {

    let id = req.body.id; 
    let nome = req.body.nome;
    let idade = req.body.idade;
    let nacionalidade = req.body.nacionalidade;
    let time = req.body.time;

    let ad = serviceUsuario.alterar(id, nome, idade, nacionalidade, time)

    res.json(ad)
}

function deleteUsuario(req, res){
    let id = req.body.id;
    let d = serviceUsuario.excluir(id)

    res.send(d)


}




module.exports = {
    cadastrar,
    listarUsuarios,
    editarUsuario,
    deleteUsuario
}