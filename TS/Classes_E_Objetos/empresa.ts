class Empresa {
    public nome: string;
    public cnpj: string;
    
    constructor(nome: string, cnpj: string) {
        this.nome = nome;
        this.cnpj = cnpj;
    }
}

let empresa = new Empresa(`Bar do DIGO`, `123456789`)

console.log(`Nome: ${empresa.nome} CNPJ: ${empresa.cnpj}`);