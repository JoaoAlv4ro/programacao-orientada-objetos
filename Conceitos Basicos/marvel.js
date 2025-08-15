let steveRogers = 'Capitão América';
var tonyStark = 'Homem de Ferro';

console.log("Super-hérois da Marvel: "+ steveRogers + ', ' + tonyStark);

// Declaração de Variáveis - var
var nome = "Príncipe T'Challa";
console.log("Meu nome é: " + nome);

nome = "Black Panther"
console.log("Meu nome é: " + nome);

// Hoisting com var
// if (true) {
//     var hulk = 'Eric Bana';
//     console.log(hulk);
// }
// console.log(hulk);

// Hoisting com let
if (true) {
    let hulk = 'Eric Bana';
    console.log(hulk);
}
console.log(hulk); // Erro de execução por variavel indefinida