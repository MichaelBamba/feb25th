
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