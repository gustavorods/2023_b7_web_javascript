// Objeto: Key, Values e Entries - Obejtos
let pessoa = {
    nome:'Gustavo',
    sobrenome:'Rodrigues',
    idade:17
};

// Key (vai retornar os indices)
console.log(Object.keys(pessoa)); // (3) ['nome', 'sobrenome', 'idade']

// Values (vai retornar os valores )
console.log(Object.values(pessoa)); // (3) ['Gustavo', 'Rodrigues', 17]

// Entries (vai retornar o indice e o valor)
console.log(Object.entries(pessoa)); 
/*
0: (2) ['nome', 'Gustavo']
1: (2) ['sobrenome', 'Rodrigues']
2: (2) ['idade', 17]
*/