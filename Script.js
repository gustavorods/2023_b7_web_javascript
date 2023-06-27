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

    setAge(newAge) {
        if(typeof newAge == "number") {
        this.age = newAge;

        }
    }

}



let p1 = new Person("Gustavo");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

p1.takeAstep();
p1.takeAstep();
p1.setAge(10);

console.log(`Passos de ${p1.name}: ${p1.steps} e tem ${p1.age}`)
