exports.homePage = (req, res) =>{
    //res.render = renderizar page 
    res.render('index');
}

exports.trataPost = (req, res) =>{
    res.send('Sou sua nova rota');
}