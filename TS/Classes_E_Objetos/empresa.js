var Empresa = /** @class */ (function () {
    function Empresa(nome, cnpj) {
        this.nome = nome;
        this.cnpj = cnpj;
    }
    return Empresa;
}());
var empresa = new Empresa("Bar do DIGO", "123456789");
console.log("Nome: ".concat(empresa.nome, " CNPJ: ").concat(empresa.cnpj));
