let Empresa = class {
    #cnpj
    constructor(nome, nomeFantasia, cnpj) {
        this.nome = nome;
        this.nomeFantasia = nomeFantasia;
        this.#cnpj = cnpj; // Atributo Privado
    }

    get getCnpj() {
        return this.#cnpj;
    }
    
    set setCnpj(novoCnpj) {
        this.#cnpj = novoCnpj;
    }

    #colocarMaisculo(texto) {
        return texto.toUpperCase();
    }

    mostrarDetalhes() {
        return 'Nome da empresa: ' + this.#colocarMaisculo(this.nome)
            + '\nNome fantasia: ' + this.#colocarMaisculo(this.nomeFantasia)
    }
}

let empresa = new Empresa("abc LTDA", "Mercado Online", "99999999");

empresa.setCnpj = "888888888";
console.log('Qual o cnpj: ' + empresa.getCnpj);
console.log(empresa.mostrarDetalhes());