// Quando vc faz uma requisição e obtém uma resposta, ele vai vir no formato de JSON só que em string.
// É necessário converter esse "JSON" para um JSON normal, ou seja, em formato de objeto
let pessoa = JSON.parse('{"nome": "Gustavo", "idade": 90}');

console.log(pessoa); // {nome: 'Gustavo', idade: 90}