const express = require("express");
const app = express();
const porta = 3333;

function mostraPorta(){
    console.log("Servidor",porta);
}
app.listen(porta,mostraPorta);
