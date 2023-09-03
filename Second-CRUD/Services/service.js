// cadastrar Animais
let validacaoAnimais = require('../Validators/animais')
let animais = [];
let id = 1;



function cadastrar(nome, tipo, raca, cor, idade, peso, altura){
    if( validacaoAnimais.verificacao <= 0){
        return verificacao;
    }else {
        let cadastro = {
            nome, 
            tipo,
            raca,
            cor, 
            idade,
            peso,
            altura
        }
        animais.push(cadastro)
        id++
        return cadastro
    }
}



module.exports = {
    cadastrar
}