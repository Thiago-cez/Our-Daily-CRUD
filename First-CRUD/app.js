const express = require('express');
const app = express();

app.use(express.json());
const port = 3000;

const usuario = require('./routers/usuario')


app.use('/usuario',  usuario.router);







app.listen(port, () => {
 console.log(`servidor Rodando na porta ${port}`)
})