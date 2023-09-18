const User = require('../model/User')


async function cadastrar(nome, empresa, sexo, idade, admin) {

    const novoUsuario = new User({nome, empresa, sexo, idade, admin })

    await novoUsuario.save()

    .then(() => {
        return "Cadastrado com Sucesso!"
    })
    .catch((error) => error);

}

async function listar() {
  return await User.find({})
}


async function editar(id,nome, empresa, sexo, idade, admin){
  await User.findByIdAndUpdate(id, {nome, empresa, sexo, idade, admin})

  return "Auterado co Sucesso!!"
}

async function deletar(id){
    
    await User.findByIdAndDelete(id)

    return "Excluido com Sucesso"
}







module.exports = {
    cadastrar,
    listar,
    editar,
    deletar
}