const serviceAnuncios =  require('../Services/service')

function createAnuncio(req, res) {
   let ano = req.body.ano;
   let marca = req.body.marca;
   let modelo = req.body.modelo;
   let kilometragem = req.body.kilometragem;
   let cor = req.body.cor;
   let preco = req.body.preco;
   let descricao = req.body.descricao

 let n = serviceAnuncios.createAnuncio( 
    ano,
    marca,
    modelo,
    kilometragem,
    cor,
    preco,
    descricao)


   res.json(n);

}


function listaAnuncio(req, res){
    res.json(serviceAnuncios.listar())
}

module.exports = {
  createAnuncio,
  listaAnuncio
}