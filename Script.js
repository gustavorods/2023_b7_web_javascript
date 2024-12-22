// Objeto: Key, Values e Entries - Array
let lista = ['ovo', 'maçã', 'café'];

// Key (vai retornar os indices)
console.log(Object.keys(lista)); // (3) ['0', '1', '2']

// Values (vai retornar os valores )
console.log(Object.values(lista)); // (3) ['ovo', 'maçã', 'café']

// Entries (vai retornar o indice e o valor)
console.log(Object.entries(lista)); 
/*
0: (2) ['0', 'ovo']
1: (2) ['1', 'maçã']
2: (2) ['2', 'café']
*/