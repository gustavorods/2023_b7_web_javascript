//esta sendo criado o template agr

    class Person {

    age = 0; //definindo o valor de age

    constructor(name, age) {
        this.name = name;
    }
}


//para criar as pessaos, vc vai ter que instânciar uma classe (em outras palavras, pegar o template anterior e adicionar os valores )

let p1 = new Person("Gustavo");
let p2 = new Person("Maria");
let p3 = new Person("Pedro");

console.log(p1.age); 
console.log(p2.age); 
console.log(p3.age);

/*todos vão ter 0 anos, mas vc pode adicionar, você pode colocar a idade com: 

exemplo: p1.age = 30 

obs:age é uma propriedade que exxites, mas não foi preenchida no construtor, porém existe


*/

