exports.homePage = (req, res) =>{
    res.send(`
    <form action='/' method='POST'>
        Nome do cliente1: <input type='text' name='nome'></input>
        <button>Olá MUNDO</button>
    </form>`);
}

exports.trataPost = (req, res) =>{
    res.send('Sou sua nova rota');
}