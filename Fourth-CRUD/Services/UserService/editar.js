async function editar(id,nome, empresa, sexo, idade, admin){
    await User.findByIdAndUpdate(id, {nome, empresa, sexo, idade, admin})
  
    return "Alterado com Sucesso!!"
  }

  
  module.exports = {
    editar
  }