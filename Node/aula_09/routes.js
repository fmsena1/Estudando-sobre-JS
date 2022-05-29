const express = require('express');
const route = express.Router();
const homeController = require('./controllers/homeController');
const contatoController = require('./controllers/contatoController');

//Rotas da Home
route.get('/', homeController.homePage);
route.post('/', homeController.trataPost);

//Rotas de Contato

route.get('/contato', contatoController.pageContact);





module.exports = route;