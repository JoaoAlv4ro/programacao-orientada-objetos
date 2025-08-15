function calcularPotencia(base, expoente) { // Parametros
    return base**expoente;
}

let resultado = calcularPotencia(2, 3); // Argumentos
console.log('Resultado: ' + resultado);

// Funções também são objetos
let calularPotencia = new Function('base, expoente', 'return base**expoente');

let resultado2 = calularPotencia(2, 2);
console.log('Resultado: ' + resultado2);