const express = require('express');
const app = express();
//          Criar   Ler  Atualizar   Apagar
//CRUD ==> CREATE, READ, UPDATE,     DELETE
//         POST     GET    PUT       DELETE
//Ctrl alt m Ctrl shift p
app.get('/', (req, res) => {
    res.send('Olá!');
    <form action='/' method='POST'>
        Nome: <
    </form>
});



app.listen(3000, ()=> {
    console.log('http://localhost:3000')
    console.log('Servidor exucutando na porta 3000');
});