const express = require("express");
const app = express();
const porta = 3333;
const router = express.Router();

function mostraMulher(request,response){
    response.json({
        nome: 'Aline Ribeiro',
        imagem:'',
        minibio: 'Desenvolvedora front-end'
    })
}
function mostraPorta(){
    console.log("Servidor",porta);
}

app.use(router.get('/mulher',mostraMulher));
app.listen(porta,mostraPorta);
