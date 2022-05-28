const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));
//          Criar   Ler  Atualizar   Apagar
//CRUD ==> CREATE, READ, UPDATE,     DELETE
//         POST     GET    PUT       DELETE
//Ctrl alt m Ctrl shift p
app.get('/', (req, res) => {
    res.send(`
    <form action='/' method='POST'>
        Nome do cliente1: <input type='text' name='nome'></input>
        <button>Olá MUNDO</button>
    </form>`);
});
//? Pode ou não ser recebido
app.get('/testes/:idUsers?/:parametros?', (req, res) =>{
    console.log(req.params);
    console.log(req.query);
    res.send(req.params);
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi : ${req.body.nome}`);
});

app.listen(3000, ()=> {
    console.log('http://localhost:3000')
    console.log('Servidor exucutando na porta 3000');
});