exports.homePage = (req, res) =>{
    console.log('error', req.flash('info'));
    //res.render = renderizar page 
    res.render('index');
    return;
   
}

exports.trataPost = (req, res) =>{
    res.send(req.body);
    return;
}