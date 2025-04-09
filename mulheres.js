const express = require("express");
const app = express();
const porta = 3333;
const router = express.Router();

const mulheres = [
    {
        nome: 'Aline Ribeiro',
        imagem:'https://media.licdn.com/dms/image/v2/C4D03AQGdmzDr-6VsQw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1628692640734?e=1747267200&v=beta&t=Uos1vXN_52lIBnstQL6JoELt-3lQ_gTrqyRCCJddx1A',
        minibio: 'Desenvolvedora front-end'
    },
    {
        nome: 'Aline Ribeiro',
        imagem:'https://media.licdn.com/dms/image/v2/C4D03AQGdmzDr-6VsQw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1628692640734?e=1747267200&v=beta&t=Uos1vXN_52lIBnstQL6JoELt-3lQ_gTrqyRCCJddx1A',
        minibio: 'Desenvolvedora front-end'
    },
    {
        nome: 'Aline Ribeiro',
        imagem:'https://media.licdn.com/dms/image/v2/C4D03AQGdmzDr-6VsQw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1628692640734?e=1747267200&v=beta&t=Uos1vXN_52lIBnstQL6JoELt-3lQ_gTrqyRCCJddx1A',
        minibio: 'Desenvolvedora front-end'
    }
]

//PORTA
function mostraPorta(){
    console.log("Servidor",porta);

}
function mostraMulheres(request,response){
    response.json(mulheres);
}
app.listen(porta,mostraPorta);
app.use(router.get('/mulheres',mostraMulheres));
