const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json');
const escreve = require('./modules/escrever');
const ler = require('./modules/ler');
/*const users = [
    {nome: 'Filipe'},
    {nome: 'Diego'},
    {nome: 'Pedro'},
    {nome: 'Jessica'}
];

const json = JSON.stringify(users, '', 2);

escreve(caminhoArquivo, json);*/

async function lerArquivo(caminho) {
    const dadosArquivo = await ler(caminho);
    renderizaDados(dadosArquivo);
}

const dados = lerArquivo(caminhoArquivo)
    .then(dadosArquivo => console.log(dadosArquivo));
    
function renderizaDados(dados){
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val.nome));
}

lerArquivo(caminhoArquivo);
