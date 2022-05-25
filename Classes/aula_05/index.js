// 055.666.777-40 - 044.222.333.03
class ValidaCPF{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            //Expressão regular para remover pontos
            value:cpfEnviado.replace(/\D+/g, '')
        })
    }
    verificaSequencia(){
        return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
    gerarCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0, -2);
        const digito1 = this.gerarDigito(cpfSemDigitos);
    }
    gerarDigito(cpfSemDigitos){
        let total = 0;
        let reverso = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos){
            //console.log(stringNumerica, reverso);
            total += reverso * Number(stringNumerica);
            reverso--;
        }
        console.log(total);
    }
    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.verificaSequencia()) return false;
        if(!this.gerarCpf()) return false;
        return 'ok';
    }
}

let validacpf = new ValidaCPF('044.222.333.03');
 //validacpf = new ValidaCPF('999.999.999-99');
console.log(validacpf.valida());