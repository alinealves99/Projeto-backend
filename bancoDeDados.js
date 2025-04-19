const mongoose = require('mongoose');
require('dotenv').config(); // carrega variáveis do .env

async function conectaBancoDeDados(){
    try{
    console.log('Conexão com o banco de dados iniciada');

    await mongoose.connect(process.env.MONGO_URI);

    console.log('Conexão com o banco de dados realizada com sucesso!');

} catch(erro){
    console.log(erro);
}
}

module.exports = conectaBancoDeDados