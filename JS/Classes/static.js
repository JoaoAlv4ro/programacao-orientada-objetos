let Empresa = class {
    static telefoneGeral;
    constructor(razaoSocial, nomeFantasia, cnpj) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.cnpj = cnpj
    }
}

Empresa.telefoneGeral = '(12) 99999999';

console.log('Telefone da empresa: \n' + Empresa.telefoneGeral);