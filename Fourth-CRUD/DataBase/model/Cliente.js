const mongoose = require("mongoose");

const User = mongoose.model("user", 
                             { nome: String, 
                               idade: Number,
                               sexo: String,
                               pais: String,
                               ativo: Boolean
                            })




module.exports = User;