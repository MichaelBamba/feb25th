
class Wongfam {
    constructor(firstName, lastName, eyeColor, hairColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.eyeColor = eyeColor;
        this.hairColor = hairColor;
    }
    showInfo() {
        console.log(`${this.firstName} ${this.lastName} ${this.eyeColor} ${this.hairColor}`)
    }

}

const mom = new Wongfam(`Alice`, `wong`, `brown`, `black`);

const daughter = new Wongfam(`Ilene`, `wong`, `brown`, `black`);

daughter.showInfo()

class Person {
    constructor(name, friends) {
        this.name = name;
        this.friends = [];
    }
    addFriend(friend) {
        this.friends = push(friend)
    }
    greet(other) {
        console.log(`hi ${other}`)
    }
    lazyGreet() {

        const delayiInMilliseconds = 2000;
        setTimeout(function (e) {
            console.log("inside of set timeout");
        }, delayiInMilliseconds)

    }
}

me = new Person('michael')
me.greet('red')
me.lazyGreet();

