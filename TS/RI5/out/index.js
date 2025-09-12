"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var empresa_1 = __importDefault(require("./model/empresa"));
var endereco_1 = __importDefault(require("./model/endereco"));
var funcionario_1 = __importDefault(require("./model/funcionario"));
var telefone_1 = __importDefault(require("./model/telefone"));
var enderecoEmpresa = new endereco_1.default(0, "Rua dos Bobos", "Bairro do Loucos", "Caçapava");
var telefoneFuncionario1 = new telefone_1.default("12", "99999-9999");
var enderecoFuncionario1 = new endereco_1.default(0, "Rua dos Bobos", "Bairro do Loucos", "Caçapava");
var funcionario1 = new funcionario_1.default("Rodolfo", "1", "111.111.111-11", enderecoFuncionario1, telefoneFuncionario1);
var funcionarios = [funcionario1];
var telefones = [telefoneFuncionario1];
var empresa = new empresa_1.default("Prime", "Prime Soluções LTDA", "11.111.111/0001-11", enderecoEmpresa, funcionarios);
console.log(empresa);
