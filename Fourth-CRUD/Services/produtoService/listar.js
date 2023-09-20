async function listar(){
    return await Produto.find({})
}

module.exports = {
    listar
}
