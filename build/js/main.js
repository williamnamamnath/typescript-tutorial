"use strict";
//Converting to more or less specific
let a = 'Hello';
//Assignment to a less specific type
let b = a;
//Assignment to a more specific type
let c = a;
let d = 'world';
//We don't need to use an alias exclusively in the angle brackets
let e = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
//This wouldn't work since myVal only accepts a string, whereas addOrConcat accepts a number or a string
// let myVal: string = addOrConcat(2, 2, 'concat')
let myVal = addOrConcat(2, 2, 'concat');
//TS sees no problem in this case, but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
//Double casting/assertions, the example below isn't necessary valid
10;
//The DOM
const img = document.querySelector('img');
//or
//const img = document.querySelector('img')!
//If we know that the HTML tag below exists, we can use an assertion in the img const above to declare that img isn't null
img.src;
//A non-null assertion can be decalred with '!'
const myImg = document.getElementById('#img');
//or
//const myImg = document.getElementById('#img') as HTMLImageElement
myImg.src;
