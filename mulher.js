const express = require("express");
const app = express();
const porta = 3333;
const router = express.Router();

function mostraMulher(request,response){
    response.json({
        nome: 'Aline Ribeiro',
        imagem:'https://media.licdn.com/dms/image/v2/C4D03AQGdmzDr-6VsQw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1628692640734?e=1747267200&v=beta&t=Uos1vXN_52lIBnstQL6JoELt-3lQ_gTrqyRCCJddx1A',
        minibio: 'Desenvolvedora front-end'
    })
}
function mostraPorta(){
    console.log("Servidor",porta);
}

app.use(router.get('/mulher',mostraMulher));
app.listen(porta,mostraPorta);
