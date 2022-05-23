function criaPessoa(nome, sobrenome){
    const pessoasPrototype = {
//Métodos
falar(){
    console.log(`${this.nome} está falando.`);
},
comer(){
    console.log(`${this.nome} está comendo.`);
},
beber(){
    console.log(`${this.nome} está bebendo.`);
},
    };
    //Linkando o pessoaPrototype
    return Object.create(pessoasPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

    const p1 = criaPessoa('Filipe', 'Sena');
    const p2 = criaPessoa('Maria', 'Fernanda');
    console.log(p1);
    console.log(p2);
