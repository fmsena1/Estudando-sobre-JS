//Produto - aumento de preco, desconto
// Camiseta, caneca, lapis

function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;

}

Produto.prototype.aumento  = function(quantia){
this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);

}

Camiseta.prototype = Object.create(Produto.prototype);

const camiseta = new Camiseta('Regata', 20, 'Preta');
camiseta.aumento(10);
console.log(camiseta);