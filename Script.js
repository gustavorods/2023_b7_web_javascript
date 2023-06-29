class Person {

    age = 0;

    constructor(name) {
        this.name = name;


    }

    sayHi() {
        console.log(`${this.name} diz OI `)
    } 

}


class Student extends Person {

    
    constructor(name, id) {
        super(name);
        this.id = id;
    }

    sayHello() {
        super.sayHi();
        console.log("tudo bem?"); 
    }
}


let p1 = new Student("Pedro", 11123)

p1.sayHello(); 