class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`hi my name is ${this.name}`)
    }
    discribe() {
        console.log(`${this.name} ${this.age} years old`)
    }
    static introduce(person) {
        console.log(`this is ${person.name}, they are ${person.age} years old`)

    }
}


const me = new Person('michael', 25);
const jason = new Person('jason', 43)
me.sayHello();
me.discribe();

class teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;

    }

    mySubject() {
        console.log(`${this.name} teaches ${this.subject} at ${this.age}`)
    }

}

const sean = new teacher(`sean`, 50, `javascript`)

sean.mySubject();
Person.introduce(jason);
Person.introduce(sean);