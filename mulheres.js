const express = require("express"); //Iniciando o express
const app = express(); //Iniciando o app
const porta = 3333; // Criando a porta
const router = express.Router();// Configurando a primeira parte da rota
const cors = require('cors'); //Trazendo o pacote cors - que permite consumir essa api no front-end
const conectaBancoDeDados = require('./bancoDeDados');//Ligando ao arquivo bancoDeDados

conectaBancoDeDados();//Chamando a função que conecta o banco de dados

const Mulher = require('./mulherModel');

app.use(express.json());
app.use(cors());


//PORTA
function mostraPorta() {
    console.log("Servidor", porta);

}
//GET
async function mostraMulheres(request, response) {
    try {
        const mulheresVindasDoBancoDeDados = await Mulher.find();

        response.json(mulheresVindasDoBancoDeDados);

    } catch (erro) {
        console.log(erro)
    }
}

//POST
async function criaMulher(request, response) {
    const novaMulher = new Mulher({
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio,
        citacao: request.body.citacao
    })

    try {
        const mulherCriada = await novaMulher.save();
        response.status(201).json(mulherCriada)
    } catch (erro) {
        console.log(erro);
    }

}

//PATCH
async function corrigeMulher(request, response) {
    try{
        const mulherEncontrada = await Mulher.findById(request.params.id)
    
        if (request.body.nome) {
            mulherEncontrada.nome = request.body.nome;
        }
    
        if (request.body.minibio) {
            mulherEncontrada.minibio = request.body.minibio;
        }
    
        if (request.body.imagem) {
            mulherEncontrada.imagem = request.body.imagem;
        }

        if (request.body.citacao) {
            mulherEncontrada.citacao = request.body.citacao;
        }
        
        const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save();
        response.json(mulherAtualizadaNoBancoDeDados);

    } catch(erro){
        console.log(erro);
    }

}

async function deletaMulher(request, response) {
    try{
        await Mulher.findByIdAndDelete(request.params.id);
        response.json({messagem: 'Mulher deletada com sucesso!'})

    } catch(erro){

        console.log(erro);
    }
}

app.use(router.post('/mulheres', criaMulher)); // Configuração rota POST /mulheres
app.use(router.get('/mulheres', mostraMulheres));// Configuração rota GET /mulheres
app.use(router.patch('/mulheres/:id', corrigeMulher));//Configuração rota PATCH /mulheres
app.use(router.delete('/mulheres/:id', deletaMulher));//Configuração rota DELETE /mulheres

app.listen(porta, mostraPorta);// Servidor ouvindo a porta

