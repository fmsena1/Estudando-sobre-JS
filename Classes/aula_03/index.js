
class DispositivoEletronico{
    constructor(nome) {
        this.nome = nome;
        this.ligado = false;
    }
    ligar() {
        if(this.ligado){
        console.log(`${this.nome} já ligado.`);
            return;}
            this.ligado = true;
    }

    desligar() {
        if(!this.ligado){
        console.log(`${this.nome} desligado.`);;
        return;
        }
        this.ligado = true;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome, cor, modelo){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Smartwatch extends DispositivoEletronico {
    constructor(nome, cor, modelo, configWifi){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
        this.configWifi = configWifi;
        this.ligado = false;
    }
    ligarWifi(){
        if(this.Wifi){
            console.log(`${this.configWifi} está ligado.`);
            return;
        }
        this.Wifi = true;
    }

    desligarWifi(){
        if(!this.Wifi){
            console.log(`${this.configWifi} está desligado.`);
            return;
        }
        this.Wifi = true;
    }
}

const s1 = new Smartphone('Iphone', 'Branco', 'S11');
const t1 = new Smartwatch('Apple Watch ', 'Preto', 'Series 7', 'Wi-fi');
t1.ligarWifi();
t1.ligarWifi();
s1.ligar();
console.log(t1);
console.log(s1);