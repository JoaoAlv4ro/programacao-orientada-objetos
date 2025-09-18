// let funcao = (mensagem: string | number): string => {
//     return `Minha mensagem: ${mensagem}`
// }

// console.log(funcao(200));

import Pessoa from "./pessoa"

let ps = new Pessoa(`12314214`)

console.log(ps.obterCPF());
