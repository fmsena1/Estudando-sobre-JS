//Herança

function Pessoa(primeiro, segundo, idade, genero_sexual, interesses){
    this.nome = {
        primeiro,
        segundo
    }
    this.idade = idade;
    this.genero_sexual = genero_sexual;
    this.interesses = interesses;

}

Pessoa.prototype.saudacoes = function(){
    console.log('Olá, meu nome é ' + this.nome.primeiro + '.');
}

function Professor(primeiro, segundo, idade, genero_sexual, interesses, subject){
    Pessoa.call(this, primeiro, segundo, idade, genero_sexual, interesses);

    this.subject = subject;
}

Object.getOwnPropertyNames(Professor.prototype);
Professor.prototype = Object.create(Pessoa.prototype);

Object.defineProperty(Professor.prototype, 'constructor', {
    value: Professor,
    enumerable: false,
    writable: true


})