function verificacao(objeto, arrey){
    alertas = [];

    if(arrey.some( u => u.nome == objeto.nome)) {
        alertas.push("Pet ja Cadastrado")
    }

  

    if(objeto.nome.indexOf() >= 0){
        alertas.push("campo vazio ou nao é permitido espaçamentos")
    }

    if(objeto.tipo.indexOf() >= 0){
        alertas.push("campo vazio ou nao é permitido espaçamentos")
    }

    if(objeto.raca.indexOf() >= 0){
        alertas.push("campo vazio ou nao é permitido espaçamentos")
    }

    if(objeto.cor.indexOf() >= 0){
        alertas.push("campo vazio ou nao é permitido espaçamentos")
    }

   
    if(objeto.idade.indexOf() >= 0){
        alertas.push("campo vazio ou nao é permitido espaçamentos")
    }

    if(objeto.peso.indexOf() >= 0){
        alertas.push("campo vazio ou nao é permitido espaçamentos")
    }

    if(objeto.altura.indexOf() >= 0){
        alertas.push("campo vazio ou nao é permitido espaçamentos")
    }




    return alertas;
}


module.exports = {
    verificacao
}