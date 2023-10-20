const express = require ("express");
const mongoose = require("mongoose");

const app = express();
const port = 3000;

app.use(express.json())

const connectionString = 


app.listen(port,() => {
    console.log(`Servidor Rodando na porta: ${port}`)
})

