"use strict";
var tel = {
    ddd: '12',
    numero: '997444739'
};
var mensagem = function (info) {
    return "ddd: ".concat(info.ddd, " numero: ").concat(info.numero);
};
console.log(mensagem(tel));
