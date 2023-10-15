
const User = require('../../DataBase/model/User')()


async function cadastrar(nome, empresa, sexo, idade, admin) {

    const novoUsuario = new User({nome, empresa, sexo, idade, admin });

    try {
        await novoUsuario.save();
        
        return "Cadastrado com Sucesso!";

    } catch (error) {
        return error; // You can return the error object if there's an issue.
    }
}










module.exports = {
    cadastrar
}