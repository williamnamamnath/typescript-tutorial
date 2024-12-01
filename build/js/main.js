"use strict";
// class Coder {
//     //Need to delcare the property first
//     name: string
//     music: string
//     age: number
//     lang: string
//     //And mention it again in the constructor
//     constructor(
// name: string, 
// music: string, 
// age: number, 
//         lang: string
//     ) {
//         this.name = name
//         this.music = music
//         this.age = age
//         this.lang = lang
//     } //The following is not DRY, better to reformat
// }
class Coder {
    //Assignments in the body of the constructor are not required
    constructor(name, music, age, 
    //Optional parameter in this case
    lang = 'Typescript') {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I am ${this.age}.`;
    }
}
const Will = new Coder('Will', 'Rock', 26);
console.log(Will.getAge());
//The following console logs is not valid since the property is private and can only be accessed within its class. We can access a method, but not the property explicitly if private or protected
//In dev tools, the logs will still be displayed as it is valid JS code, but not appropriate for TS
//console.log(Will.age);
//console.log(Will.lang);
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}.`;
    }
}
const LP = new WebDev('Mac', 'LeBron', 'Lofi', 25);
console.log(LP.getLang());
//All properties from Musician must match the ones in the Guitarist class
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}.`;
    }
}
const Mark = new Guitarist('Jimmy', 'guitar');
console.log(Mark.play('strums'));
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        //When ++ is written first (and not on the right), it means that count will increment first. So count will start at 1 instead of 0 when the first instanciation of this class is created
        this.id = ++Peeps.count;
    }
}
//Static means that 'count' doesn't apply to any instanciation of the class, but rather to to the class directly itself
Peeps.count = 0;
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(Peeps.count);
console.log(Steve.id);
console.log(Amy.id);
console.log(John.id);
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    //Setters cannot return a value
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const myBands = new Bands();
myBands.data = ['Bon Jovi', 'Metallica'];
//How to use the getter
console.log(myBands.data);
myBands.data = [...myBands.data, 'Linkin Park'];
console.log(myBands.data);
//Checking for an error. The following recognizes that 5150 is not a string. Also, if brackets weren't inserted, an error would also be thrown as type 'string is not assignable to type 'string[]'
//myBands.data = ['Van Halen', 5150]
