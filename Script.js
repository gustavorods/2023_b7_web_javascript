    class Person {

    _age = 0; 
    steps = 0;


    
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }


    takeAstep() {
        this.steps++;
    }    



    get age() {
        return this._age; //é necessário renomear o age, por isso o "_age" (os nomes tem que ser diferente )
    } //vai retornar o valor que eu quero 

    get fullname() {
        return `${this.firstName} ${this.lastName}`;
    }

    set age(x) {
        if(typeof x == "number") {
            this._age = x; //x armazena temporiariamente 
        }
    }

}



let p1 = new Person("Gustavo", "Silva");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");


p1.age = 10;
p2.age = 1

console.log(`${p1.fullname} tem ${p1.age} anos`)
console.log(`${p2.fullname} tem ${p2.age} anos`)
