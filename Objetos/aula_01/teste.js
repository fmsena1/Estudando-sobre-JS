function Marca(nomeMarca, modelo, ano, cor){

    this.nomeMarca = nomeMarca;
    this.modelo = modelo;
    this.cor = cor;

    Object.defineProperties(this, {

        ano: {
            enumerable: true,
            value: ano,
            writable: false, //Não pode ser alterado o valor
            configurable: false //Não pode ser configurado

        }
    });
}

    const p1 = new Marca("Ford","EcoSport", 2009, "Prata");
    console.log(p1);

    
