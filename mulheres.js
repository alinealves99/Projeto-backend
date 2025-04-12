const express = require("express"); //iniciando o express
const app = express(); //iniciando o app
const porta = 3333; // criando a porta
const router = express.Router();// configurando a primeira parte da rota
const { v4:uuidv4} = require('uuid');

app.use(express.json());
//Lista inicial de mulheres
const mulheres = [
    {
        id:'1',
        nome: 'Aline Ribeiro',
        imagem:'https://media.licdn.com/dms/image/v2/C4D03AQGdmzDr-6VsQw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1628692640734?e=1747267200&v=beta&t=Uos1vXN_52lIBnstQL6JoELt-3lQ_gTrqyRCCJddx1A',
        minibio: 'Desenvolvedora front-end'
    },
    {
        id:'2',
        nome: 'Aline Ribeiro',
        imagem:'https://media.licdn.com/dms/image/v2/C4D03AQGdmzDr-6VsQw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1628692640734?e=1747267200&v=beta&t=Uos1vXN_52lIBnstQL6JoELt-3lQ_gTrqyRCCJddx1A',
        minibio: 'Desenvolvedora front-end'
    },
    {
        id:'3',
        nome: 'Aline Ribeiro',
        imagem:'https://media.licdn.com/dms/image/v2/C4D03AQGdmzDr-6VsQw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1628692640734?e=1747267200&v=beta&t=Uos1vXN_52lIBnstQL6JoELt-3lQ_gTrqyRCCJddx1A',
        minibio: 'Desenvolvedora front-end'
    }
]

//PORTA
function mostraPorta(){
    console.log("Servidor",porta);

}
//GET
function mostraMulheres(request,response){
    response.json(mulheres);
}

//POST
function criaMulher (request,response){
    const novaMulher ={
    id:uuidv4(),
    nome:request.body.nome,
    imagem:request.body.imagem,
    minibio:request.body.minibio
}

mulheres.push(novaMulher)

response.json(mulheres)

}

app.listen(porta,mostraPorta);// Servidor ouvindo a porta
app.use(router.post('/mulheres', criaMulher)) // configuração rota POST /mulheres
app.use(router.get('/mulheres',mostraMulheres));// configuração rota GET /mulheres
