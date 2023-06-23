    class Person {

    //variaveis
    age = 0;
    steps = 0;


    //construtor
    constructor(name) {
        this.name = name;
    }


    //ações
    takeAstep() {
        this.steps++;
    }

}



let p1 = new Person("Gustavo");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

p1.takeAstep();
p1.takeAstep();

console.log(`Passos de ${p1.name}: ${p1.steps}`)
console.log(`Passos de ${p2.name}: ${p2.steps}`)