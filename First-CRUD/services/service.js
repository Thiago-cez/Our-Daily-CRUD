// criar CRUD Cadastro de usuario
let usuarios = [];


function novoCadastro(id, nome, idade, nacionalidade, time){

      let u = {
        id,
        nome,
        idade,
        nacionalidade,
        time
      }

      usuarios.push(u)

      return u;

}

function listar(){
    return (usuarios)
}


function alterar(id, nome, idade, nacionalidade, time){
    let index = usuarios.findIndex( u => u.id == id)

    let obj = usuarios[index];

    obj.nome = nome;
    obj.idade = idade;
    obj.nacionalidade = nacionalidade;
    obj.time = time

    return obj
}


function excluir( id ) {
    index = usuarios.findIndex( u => u.id == id)

    usuarios.splice(index, 1)

    return "Usuario excluido com Sucesso"
}





module.exports = {
    novoCadastro,
    listar,
    alterar,
    excluir
}