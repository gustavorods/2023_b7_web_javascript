// Quando vc envia uma requisição, antes você tem que transformar seu objeto em um JSON String.
// Praticamente o inverso do "JSON.parse()" 
let pessoa = {nome:'gustavo', idade:17};
let JSONString = JSON.stringify(pessoa);
console.log(JSONString); // {"nome":"gustavo","idade":17}