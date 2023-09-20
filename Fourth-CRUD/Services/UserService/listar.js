async function listar() {
    return await User.find({})
  }


  module.exports = {
    listar
  }