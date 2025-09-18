"use strict";
// let funcao = (mensagem: string | number): string => {
//     return `Minha mensagem: ${mensagem}`
// }
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// console.log(funcao(200));
var pessoa_1 = __importDefault(require("./pessoa"));
var ps = new pessoa_1.default("12314214");
console.log(ps.obterCPF());
