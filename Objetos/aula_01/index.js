 // defineProperty - defineProperties


 function Produto(nome, preco, estoque){

    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        value: estoque, // Puxa o valor relacionado a variavel -> estoque       
        writable: false, // Pode (true) ou não(false) alterar o valor
        configurable: false, // Pode ser configuravel (true), não pode ser configuravel (false)

    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //Mostra a chave
        value: nome, // Puxa o valor relacionado a variavel -> estoque       
        writable: true, // Pode (true) ou não(false) alterar o valor
        configurable: true, // Pode ser configuravel (true), não pode ser configuravel (false)
        },
        preco: {enumerable: true, //Mostra a chave
        value: preco, // Puxa o valor relacionado a variavel -> estoque       
        writable: true, // Pode (true) ou não(false) alterar o valor
        configurable: true, // Pode ser configuravel (true), não pode ser configuravel (false)};
    }
});


 }

    const p1 = new Produto("Camisa Adidas Essencials", 50, 5);
    console.log(p1);

    for(let chave in p1){
        console.log(chave);
    }