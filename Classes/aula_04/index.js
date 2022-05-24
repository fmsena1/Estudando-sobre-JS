class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0
    }
    //Método de instância
    aumentarVolume(){
        this.volume++;
    }

    diminuirVolume(){
        this.volume--;
    }
    //Método estático
    static trocaPilha(){
        console.log('Ok, vou trocar.');
    }
}

const c1 = new ControleRemoto('SmartTV Samsung');
c1.aumentarVolume();
console.log(c1);


