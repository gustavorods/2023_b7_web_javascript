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
        return this._age;
    }

    get fullname() {
        return `${this.firstName} ${this.lastName}`
    }

}



let p1 = new Person("Gustavo", "Silva");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

console.log(`${p1.fullname} tem ${p1.age} anos`)
