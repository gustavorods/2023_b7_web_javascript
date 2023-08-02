function createPerson(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
        NomeInteiro() {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

let person1 = createPerson("Gustavo", "Rodrigues", "16");
let person2 = createPerson("Pedro", "Alves", "32");

console.log("Olá", person1.NomeInteiro());

/* 
Erro para não cometer: 

function createPerson(nome, sobrenome, idade) {
    return {
        nome,
        sobrenome,
        idade,
        NomeInteiro: () => {
            return `${this.nome} ${this.sobrenome}`
        }
    }
}

Motivo: 
Esse arrow function que eu criei é uma função anonima (que não possui nome), ou seja, é independente,
que significa que ela não tem acesso as outras propriedades como nome e sobrenome.

Ali só foi pego um função independente e foi jogada numa propriedade(nome inteiro)
*/