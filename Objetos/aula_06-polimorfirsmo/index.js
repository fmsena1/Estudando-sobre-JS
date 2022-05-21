//Polimorfismo

//Superclass

function Conta(agencia, conta, saldo){

    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;

};
    Conta.prototype.sacar = function(valor) {
        if(valor > this.saldo) {
            console.log(`Seu saldo é insuficiente, seu saldo atual é de R$${this.saldo.toFixed(2)}.`);
            return;
        };

        this.saldo -= valor;
        this.verSaldo();
    };
    Conta.prototype.depositar = function(valor){
        this.saldo += valor;
        this.verSaldo();

    };
    Conta.prototype.verSaldo = function() {
        console.log(`Ag/C: ${this.agencia}/${this.conta}` + 
        ` | Saldo: R$ ${this.saldo.toFixed(2)}.`
        );

    };

function ContaCorrente(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
};

    ContaCorrente.prototype = Object.create(Conta.prototype);
    ContaCorrente.prototype.constructor = ContaCorrente;

    ContaCorrente.prototype.sacar = function(valor){
        if(valor > (this.saldo + this.limite)){
            console.log(`Seu saldo é insuficiente, seu saldo atual é de R$${this.saldo.toFixed(2)}.`);
            return;
        };

        this.saldo -= valor;
        this.verSaldo();

    };

    function ContaPoupança(agencia, conta, saldo) {
        Conta.call(this, agencia, conta, saldo);
    };
    
        ContaPoupança.prototype = Object.create(Conta.prototype);
       ContaPoupança.prototype.constructor = ContaPoupança;

    //cc = Conta Corrente cp = Conta Poupança
    console.log('Conta Corrente');
    const cc = new ContaCorrente(55, 5252, 0, 100);
    cc.depositar(10);
    cc.sacar(80);

    console.log('Conta Poupança');

    const cp = new ContaPoupança(12, 500, 0);
    cp.depositar(10);
    cp.sacar(80);
