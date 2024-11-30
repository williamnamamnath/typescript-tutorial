"use strict";
let stringArr = ['one', 'apple', 'car'];
let sportsData = ['soccer', 'football', 'hockey', 2024];
let mixedData = ['table', 1998, true];
stringArr[0] = 'Will';
stringArr.push('mouse');
sportsData[0] = 2016;
sportsData.unshift('basketball');
//These expressions are correct since they are valid types
sportsData = stringArr;
mixedData = sportsData;
//If blank, any type can be valid in the "test" variable
let test = [];
let strings = [];
strings.push('computer');
//Tuple - setting specific conditions to an array
let myTuple = ['Will', 1998, true];
let mixed = ['William', 1, false];
//mixed accepts strings, numbers and booleans
mixed = myTuple;
//Objects
let myObj;
myObj = [];
console.log(typeof myObj);
myObj = strings;
myObj = {}; //Another way of saying "object"
const exampleObj = {
    prop1: 'Will',
    prop2: true
};
//This is fine since prop2 is a boolean
exampleObj.prop2 = false;
//Declaring 'interface' instead of type is also valid, but make sure to remove '='
// interface Athlete {
//     name: string,
//     active?: boolean, 
//     sports: (string | number)[]
// }
//Interface would be preferrable to use when defining a class, but a type also works with objects
let sportsObj = {
    name: 'LeBron',
    active: true,
    sports: [2003, 'basketball']
};
let newSportsObj = {
    name: 'Jokic',
    active: true,
    sports: [2015, 'basketball']
};
let thirdSportsObj = {
    name: 'Durant',
    sports: [2007, 'basketball']
};
//This is valid since both have the same types and properties
//sportsObj = newSportsObj
//This is also valid since the "active" property is optional as initially defined
//thirdSportsObj = sportsObj
//The following can be done instead of defining the object and its properties and types
const greetBallPlayer = (athlete) => {
    if (athlete.name) {
        return `Hello ${athlete.name.toUpperCase()}!`;
    }
    return 'Hello!';
};
//The following will return 'Hello Durant!'
console.log(greetBallPlayer(thirdSportsObj));
//Enums are not a type-level addition to Javascript but something added to the language and runtime
//Grade 'U' would start at 0 by default, but we can set a default value to 'U', and the next values will follow that new order
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
