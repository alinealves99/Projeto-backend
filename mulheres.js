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
        nome: 'Ada Lovelace',
        imagem:'https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg',
        minibio: 'Ada Lovelace (1815–1852) é considerada a primeira programadora da história. Ela escreveu o primeiro algoritmo destinado a ser processado por uma máquina, a máquina analítica de Charles Babbage, antecipando conceitos da computação moderna.'
    },

    {
        id:'2',
        nome: 'Grace Hopper',
        imagem:'https://upload.wikimedia.org/wikipedia/commons/a/ad/Commodore_Grace_M._Hopper%2C_USN_%28covered%29.jpg',
        minibio: 'Grace Hopper (1906–1992) foi uma cientista da computação e contra-almirante da Marinha dos EUA. Ela desenvolveu a linguagem de programação COBOL e popularizou o termo “bug” na computação. Seu trabalho foi essencial na popularização da programação.'
    },

    {
        id:'3',
        nome: 'Margaret Hamilton',
        imagem:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Margaret_Hamilton_1995.jpg/500px-Margaret_Hamilton_1995.jpg',
        minibio: 'Margaret Hamilton (nascida em 1936) foi diretora de engenharia de software do projeto Apollo da NASA. Ela liderou a equipe que escreveu o código que levou o homem à Lua e cunhou o termo “engenharia de software'
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

//PATCH
function corrigeMulher(request, response){
    function encontraMulher(mulher){
        if(mulher.id === request.params.id){
            return mulher;
        }
    }

    const mulherEncontrada = mulheres.find(encontraMulher);

    if(request.body.nome){
        mulherEncontrada.nome = request.body.nome;
    }

    if(request.body.minibio){
        mulherEncontrada.minibio = request.body.minibio;
    }

    if(request.body.imagem){
        mulherEncontrada.imagem = request.body.imagem;
    }

    response.json(mulheres);
}


app.use(router.post('/mulheres', criaMulher)) // configuração rota POST /mulheres
app.use(router.get('/mulheres',mostraMulheres))// configuração rota GET /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher))//configurei rota PATCH /mulheres

app.listen(porta,mostraPorta);// Servidor ouvindo a porta

