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
            id,
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

function listar() {
    return (animais)
}

function editar(
        id,
        nome, 
        tipo,
        raca,
        cor, 
        idade,
        peso,
        altura
    ) {
    let index = animais.findIndex( u => u.id == id);

    let objEncontrado = animais[index]

    objEncontrado.nome = nome;
    objEncontrado.tipo = tipo;
    objEncontrado.raca = raca
    objEncontrado.cor = cor;
    objEncontrado.idade = idade;
    objEncontrado.peso = peso;
    objEncontrado.altura = altura;


    return objEncontrado
}











module.exports = {
    cadastrar,
    listar,
    editar
}