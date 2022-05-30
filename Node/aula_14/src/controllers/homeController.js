exports.homePage = (req, res) =>{
    //res.render = renderizar page 
    res.render('index');
    return;
   
}

exports.trataPost = (req, res) =>{
    res.send(req.body);
    return;
}