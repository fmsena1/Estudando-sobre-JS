const express = require('express');
const app = express();
const routes = require('./routes'); 
const path = require('path');

app.use(express.urlencoded({extended: true}));
//Renderização absoluta
app.set('views', path.resolve(__dirname, 'src', 'views'));
//Instalando EJS = npm i ejs
app.set('view engine', 'ejs');
app.use(routes);
app.listen(3000, ()=> {
    console.log('http://localhost:3000');
    console.log('Servidor exucutando na porta 3000');
});
