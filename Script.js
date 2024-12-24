function pegarTemperatura() {
    return new Promise(function(resolve, reject) {
        console.log("Pegando temperatura...");

        setTimeout(function() {
            const sucesso = Math.random() > 0.5; // Simula um sucesso ou falha aleatório
            if (sucesso) {
                resolve('40 na sombra');
            } else {
                reject('Erro ao pegar a temperatura');
            }
        }, 2000);
    });
}

// USANDO A PROMISE
console.log('Código antes!');

let temp = pegarTemperatura();

console.log("Código durante");

temp.then(function(resultado) {
    console.log("TEMPERATURA: " + resultado);
}).catch(function(error) {
    console.log("Eita, deu erro! Detalhes: " + error);
});

/*
resolve: Passa o valor para o then.
reject: Passa o valor para o catch.
 */

console.log("Código depois");
