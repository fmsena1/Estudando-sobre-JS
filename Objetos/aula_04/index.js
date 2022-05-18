/*Protótipo termo utilizado para se referir ao que foi criado pela primeira vez,
servindo de modelo ou molde para futuras produções*/

/*function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

}

Pessoa.prototype.estouAqui = 'Hahaha';

const pessoa1 = new Pessoa ('Luiz', 'O.'); //Pessoa = function constructor
const data = new Date(); // data = function constructor

console.dir(pessoa1);
console.dir(data); */

const meuObjeto = {
     a: 1,
     b: 2
}

//meuObjeto._proto_ --> Object.prototype --> null

const meuArray = [1, 2, 3, 'a', 'b'];

//meuArray.proto_ --> Array.prototype --> Object.prototype --> null 