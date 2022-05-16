function Produto(nome, preco, estoque){

    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        configurable: false, // Pode ser configuravel (true), não pode ser configuravel (false)
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            //Verifica de o valor é do tipo Number
            if(typeof valor !== 'number'){
                console.log("Bad value");
                return;
            }
            estoquePrivado = valor;
        }
    });

}
    const p1 = new Produto("Camisa Essencials Adidas", 20, 3);
    console.log(p1);
    // P1.estoque é igual ao estoque privado
    p1.estoque = 500;
    console.log(p1.estoque);

