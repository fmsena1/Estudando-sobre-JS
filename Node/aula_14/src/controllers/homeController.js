const HomeModel = require('../models/HomeModels');

HomeModel.create({
    titulo: 'Era uma vez',
    decricao: 'Livro Infântil'
},
    {
    titulo: 'teste',
    decricao: 'teste123'
    }
)
    .then( dados => console.log(dados))
    .catch(err => console.log(err));
exports.homePage = (req, res) =>{
    //res.render = renderizar page 
    res.render('index');
    return;
   
}

exports.trataPost = (req, res) =>{
    res.send(req.body);
    return;
}