function Product(nome, preco){
    this.nome = nome;
    this.preco = preco;

}

Product.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual / 100))

}

Product.prototype.aumentoDePreco= function (percentualAumento){
    this.preco = this.preco + (this.preco * (percentualAumento / 100))

}

const p2 = {
    nome:'Violão',
    preco: 250

};

Object.setPrototypeOf(p2, Product.prototype);

p2.aumentoDePreco(25);

const p3 = Object.create(Product.prototype,{
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 100
    },
});

p3.aumentoDePreco(10);
console.log(p3);

/*const p1 = new Product('Camiseta', 50);
p1.aumentoDePreco(10);
console.log(p2);
console.log(p1);*/