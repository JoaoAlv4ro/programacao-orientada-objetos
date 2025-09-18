export default class pessoa {
    private cpf: string;
    
    constructor(cpf: string) {
        this.cpf = cpf;
    }

    obterCPF() {
        return this.cpf
    }
}