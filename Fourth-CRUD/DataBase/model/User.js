const mongoose = require('mongoose');
const { connectionString } = require('../config/config');

async function User() {
    await mongoose.connect(connectionString);
    
    return mongoose.model('user', {
        nome: String,
        empresa: String,
        sexo: String,
        idade: Number,
        admin: Boolean
    
    });
    
}



module.exports = User;