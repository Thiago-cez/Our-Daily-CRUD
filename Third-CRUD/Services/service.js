let anuncios = [];
let id = 1;

function createAnuncio(
    ano,
    marca,
    modelo,
    kilometragem,
    cor,
    preco,
    descricao ) {

   let novo = {
    id,
    ano,
    marca,
    modelo,
    kilometragem,
    cor,
    preco,
    descricao
   }
   anuncios.push(novo)
   id++


  return(novo)
}

function listar(){

    return (anuncios)
}



module.exports = {
    createAnuncio,
    listar
}