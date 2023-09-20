async function deletar(id){
    
    await User.findByIdAndDelete(id)

    return "Excluido com Sucesso"
}


module.exports = {
    deletar
}