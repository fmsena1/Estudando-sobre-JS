/*

    Metodos úteis para objetos

    Object.values =
    Object.entries = 
    Object.assign (des,any) = permite copiar valores de um ou mais objetos e passar para outro(objeto);
    Object.getOwnPropertyDescriptor(objeto, 'prop') = 
    retorna todos os próprios descritores de propriedade de um determinado objeto;
    ...(spread) = recurso que permite acessar o conteúdo de um objeto iterável;

// 
    Object.freeze = congela os objetos
    Object.keys = retorna as chaves 
    Object.defineProperties = define as varias propriedades ao objeto
    Object.defineProperty = define uma propriedade ao objeto
*/

    // Spread operador

    const produtoBase1 = {nome: 'Violão', preco: 250};
    const piano1 = {
        ...produtoBase1, 
    materialMadeira: "Pinos",
    cordas: "Aço", 
    cor: "Preto"
};

    piano1.nome = 'Piano';
    piano1.preco = '1000';
    console.log(produtoBase1);
    console.log(piano1);

    //Object.assign (des, any)

    const produtoBase2 = {nome: 'Violão', preco: 250};
    const piano2 = Object.assign({}, produtoBase2);

    piano2.nome = 'Piano';
    piano2.preco = '1000';
    console.log(produtoBase2);
    console.log(piano2);


    const produtoBase3 = {nome: 'Produto', preco: 1.8};
    Object.defineProperty(produtoBase3, 'nome', {
        writable: false,
        enumerable: false,
    });
    console.log(Object.getOwnPropertyDescriptor(produtoBase3,'nome'));


    

