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







module.exports = {
    cadastrar,
    listar
}