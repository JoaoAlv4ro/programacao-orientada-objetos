let estrutura = new Map();

estrutura.set(1, '12');

estrutura.set('funcao', function(){
    return 'função anônima dentro do mapa';
})

console.log(estrutura.get(1));
console.log(estrutura.get('funcao')());

// Métodos e Propriedades
let estrutura2 = new Map();
estrutura2.set(1, '120');
estrutura2.set(2, '120');

console.log('Tamanho da estrutura: ' + estrutura2.size);
console.log(estrutura2.keys());
console.log(estrutura2.values());
console.log(estrutura2);