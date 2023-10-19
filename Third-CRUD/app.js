const express = require('express');
const app = express();
const port = 3000;
app.use(express.json())

const rotasAnuncios = require("./Routers/anuncio")


app.use('/anuncio', rotasAnuncios.router);











app.listen(port, () => {
    console.log(`Servidor Rodando na porta:  ${3000}`)
})