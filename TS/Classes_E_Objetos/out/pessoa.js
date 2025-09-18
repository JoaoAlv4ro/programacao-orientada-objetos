"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var pessoa = /** @class */ (function () {
    function pessoa(cpf) {
        this.cpf = cpf;
    }
    pessoa.prototype.obterCPF = function () {
        return this.cpf;
    };
    return pessoa;
}());
exports.default = pessoa;
