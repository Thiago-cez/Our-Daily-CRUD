function verificacao(objeto, arrey){
    alertas = [];

    if(arrey.some( u => u.nome == objeto.nome)) {
        alertas.push("Pet ja Cadastrado")
    }


    if(objeto.nome.includes(' ')){
        alertas.push("Campo Nome => nao é permitido espaçamentos ou campo vazio")
    }

    if(objeto.tipo.includes(' ')){
        alertas.push("Campo tipo => nao é permitido espaçamentos ou campo vazio")
    }

    if(objeto.raca.includes(' ')){
        alertas.push("Campo raça => nao é permitido espaçamentos ou campo vazio")
    }

    if(objeto.cor.includes(' ')){
        alertas.push("Campo cor =>  nao é permitido espaçamentos ou campo vazio")
    }
    
    if(objeto.idade == null || objeto.idade == undefined || isNaN(objeto.idade)) {
        alertas.push("Campo idade => não é permitido espaçamentos ou campos vazios ou não é um número válido");
    }

    if(objeto.altura == null || objeto.altura == undefined || isNaN(objeto.altura)) {
        alertas.push("Campo altura => não é permitido espaçamentos ou campos vazios ou não é um número válido");
    }
    
    if(objeto.peso == null || objeto.peso == undefined || isNaN(objeto.peso)) {
        alertas.push("Campo peso => não é permitido espaçamentos ou campos vazios ou não é um número válido");
    }


    



    return alertas;
}


module.exports = {
    verificacao
}