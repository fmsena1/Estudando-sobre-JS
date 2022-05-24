// 055.666.777-40 - 044.222.333.03
class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            //Expressão regular para remover pontos
            value:cpfEnviado.replace(/\D+/g, '')
        })
    }
    valida(){
        if(!this.cpfLimpo)
        return ;
    }
}

const validacpf = new ValidaCPF('044.222.333.03');
console.log(validacpf.valida());