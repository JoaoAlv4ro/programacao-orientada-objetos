let Empresa = class {
    #CNPJ;
    constructor(razaoSocial, nomeFantasia, cnpj, endereco) {
        this.razaoSocial = razaoSocial;
        this.nomeFantasia = nomeFantasia;
        this.#CNPJ = cnpj;
        this.endereco = endereco;
        this.clientes = new Set();
        this.telefones = new Set()
    }

    get getCNPJ() {
        return this.#CNPJ;
    }
    
}

let Cliente = class {
    #CPF
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.#CPF = cpf;
        this.telefones = new Set();
    }

    get getCPF() { 
        return this.#CPF;
    }
}

let Telefone = class {
    constructor(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
}

let Endereco = class {
    constructor(estado, cidade, rua, numero) {
        this.estado = estado;
        this.cidade = cidade;
        this.rua = rua;
        this.numero = numero;
    }
}

