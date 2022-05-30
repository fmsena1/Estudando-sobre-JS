const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const url = process.env.MONGO_URL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        //Emitir um sinal
        console.log('Conectado a base de dados');
        app.emit('pronto');
    })
    // Pode ser usado para renderizar um erro
    .catch((e) => console.log(e));

const routes = require('./routes'); 
const path = require('path');
const {middlewareGlobal} = require('./src/middlewares/middleware');

app.use(express.urlencoded({extended: true}));
//Conteúdo estático
app.use(express.static(path.resolve(__dirname, 'public')));
//Renderização absoluta
app.set('views', path.resolve(__dirname, 'src', 'views'));
//Instalando EJS = npm i ejs
app.set('view engine', 'ejs');
app.use(middlewareGlobal);
app.use(routes);
//Quando o aplicativo estiver pronto executara uma função
app.on('pronto', () =>{
    app.listen(3000, ()=> {
        console.log('http://localhost:3000');
        console.log('Servidor exucutando na porta 3000');
    });
});



