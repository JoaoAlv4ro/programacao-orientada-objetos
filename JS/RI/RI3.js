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

    get getRazaoSocialAlta() {
        return this.razaoSocial.toUpperCase();
    }
    
    get getNomeFantasiaAlta() {
        return this.nomeFantasia.toUpperCase();
    }

    get getRazaoSocialBaixa() {
        return this.razaoSocial.toLowerCase();
    }

    get getNomeFantasiaBaixa() {
        return this.nomeFantasia.toLowerCase();
    }

    detalhes() {
        console.log(`Razão Social: ${this.razaoSocial}`);
        console.log(`Nome Fantasia: ${this.nomeFantasia}`);
        console.log(`---------------------------`);
        this.clientes.forEach(cliente => {
            cliente.detalhes();
        });
    }
    
}

let Cliente = class {
    #CPF
    constructor(nome, cpf, endereco) {
        this.nome = nome;
        this.#CPF = cpf;
        this.endereco = endereco;
        this.telefones = new Set();
    }

    get getCPF() { 
        return this.#CPF;
    }

    get getNomeAlta() {
        return this.nome.toUpperCase();
    }
    
    get getNomeBaixa() {
        return this.nome.toLowerCase();
    }

    detalhes() {
        console.log(`Nome: ${this.nome}`);
        this.endereco.detalhes();
        this.telefones.forEach(tel => {
            console.log(`DDD: ${tel.ddd} Número: ${tel.numero}`);
        });
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

    detalhes() {
        console.log(`Estado: ${this.estado} Cidade: ${this.cidade} Rua: ${this.rua} Número: ${this.numero}`);
    }

    get getEstadoAlta() {
        return this.estado.toUpperCase();
    }
    get getEstadoBaixa() {
        return this.estado.toLowerCase();
    }

    get getCidadeAlta() {
        return this.cidade.toUpperCase();
    }
    get getCidadeBaixa() {
        return this.cidade.toLowerCase();
    }

    get getRuaAlta() {
        return this.rua.toUpperCase();
    }
    get getRuaBaixa() {
        return this.rua.toLowerCase();
    }
}

// Empresa
let prime = new Empresa("Prime Soluções LTDA", "Prime", "123456789", new Endereco("SP", "Caçapava", "Rua dos Bobos", 0));
prime.telefones.add(new Telefone(12, 981240774));
prime.telefones.add(new Telefone(12, 987654321));

// Clientes
let cliente1 = new Cliente("Vivian", "39377956854", new Endereco("SP", "São José dos Campos", "Ruazinha", 1))
cliente1.telefones.add(new Telefone(12, 99123456));
cliente1.telefones.add(new Telefone(12, 991041206));

let cliente2 = new Cliente("Álvaro", "50869937847", new Endereco("SP", "São José dos Campos", "Rua Grande", 2));
cliente2.telefones.add(new Telefone(12, 997444739));
cliente2.telefones.add(new Telefone(12, 998877332));

let cliente3 = new Cliente("Lafayette", "321654987", new Endereco("SP", "Caçapava", "Rua Media", 3));
cliente3.telefones.add(new Telefone(12, 40028922));
cliente3.telefones.add(new Telefone(12, 22982004));

let cliente4 = new Cliente("Leandro", "12345678901", new Endereco("SP", "São José dos Campos", "Rua Pequena", 4));
cliente4.telefones.add(new Telefone(12, 991234567));
cliente4.telefones.add(new Telefone(12, 992345678));

let cliente5 = new Cliente("Letícia", "10987654321", new Endereco("SP", "São José do Campos", "Rua do Meio", 5));
cliente5.telefones.add(new Telefone(12, 993456789));
cliente5.telefones.add(new Telefone(12, 994567890));

// Adiciona clientes dentro da empresa
let clientes = [cliente1, cliente2, cliente3, cliente4, cliente5];
clientes.forEach(cliente => { prime.clientes.add(cliente) });

prime.detalhes();