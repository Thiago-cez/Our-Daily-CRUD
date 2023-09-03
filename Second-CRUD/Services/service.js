// cadastrar Animais
let validacaoAnimais = require('../Validators/animais')
let animais = [];
let id = 1;



function cadastrar(nome, tipo, raca, cor, idade, peso, altura){
    let cad = {nome, tipo, raca, cor, idade, peso, altura}
    
    let verificador = validacaoAnimais.verificacao(cad, animais )

    if( verificador.length > 0){
        return verificador;
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