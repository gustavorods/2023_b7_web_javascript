class Person {

    static hands = 2;
    age = 0;

    constructor(name) {
        this.name = name;
    }

    sayHi() {
        console.log(`1° forma: Oi ${this.name}, eu tenho ${Person.hands} mãos!`)

        console.log("------------------------------------") //quebrar linha
    }
}

let p1 = new Person ("gu");
let p2 = new Person ("Lo");

p1.sayHi();

Person.hands = 1

console.log(`2° forma: Oi ${p1.name}, eu tenho ${Person.hands} mãos!`)
console.log(`2° forma: Oi ${p2.name}, eu tenho ${Person.hands} mãos!`)