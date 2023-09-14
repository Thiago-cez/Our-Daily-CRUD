const mongoose = require('mongoose');

const Produto = mongoose.model('produto', { 
                                             marca: String,
                                             modelo: String,
                                             ano: Number,
                                             preco: Number
                                })



module.exports = Produto;