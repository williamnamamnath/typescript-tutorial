"use strict";
//In terms of type vs interface, an interface can be seen as an object or a class whereas a type can be seen as an alias
//Literal types:
let myName;
//Example of DRY practice
let userName;
userName = 'Dave'; //Only the names mentioned above can be used for the userName variable
//Functions
const add = (a, b) => {
    return a + b;
};
//'Void' is for functions that do not return anything
const logMsg = (message) => {
    console.log(message);
};
logMsg('Hello');
logMsg(add(2, 3));
//The following wouldn't work since the 'add' function expects numbers as a return
// logMsg(add('a', 3));
//Functions does not require an arrow like arrow functions do
let subtract = function (c, d) {
    return c - d;
};
//mathFunction is an alias in this case
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
//Optional parameters
const addAll = (a, b, c) => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b;
};
//Default parameter value for 'a' and 'c'
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));
//To skip the value assigned for 'a' when calling the function. This works since 10 is passed as the default value for 'a', 3 is called for 'b' and 'c' is already assigned the default value of 2
logMsg(sumAll(undefined, 3));
//Rest parameters
const total = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
const otherTotal = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(1, 2));
