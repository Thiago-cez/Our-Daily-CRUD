
const User = require('../../DataBase/model/User')


async function cadastrar(nome, empresa, sexo, idade, admin) {

    const novoUsuario = new User({nome, empresa, sexo, idade, admin });

    await novoUsuario.save()

    .then(() => {
        return "Cadastrado com Sucesso!"
    })
    .catch((error) => error);

}










module.exports = {
    cadastrar
}