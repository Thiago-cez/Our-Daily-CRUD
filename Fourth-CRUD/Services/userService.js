const User = require('../model/User')


function cadastrar(nome, empresa, sexo, idade, admin) {

    const novoUsuario = new User({nome, empresa, sexo, idade, admin })

    novoUsuario.save()

    .then(() => {
        return "Cadastrado com Sucesso!"
    })
    .catch((error) => error);

}







module.exports = {
    cadastrar
}