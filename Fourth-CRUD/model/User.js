const mongoose = require('mongoose');

const User = mongoose.model('user', {
    nome: String,
    empresa: String,
    sexo: String,
    idade: Number,
    admin: Boolean

});



module.exports = User;