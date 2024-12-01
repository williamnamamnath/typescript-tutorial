//Type aliases
type stringOrNumber = string | number;

type stringOrNumberArr = (string | number)[];

interface Athlete {
    name: string,
    active?: boolean, 
    sports: stringOrNumberArr //or (string | number)[]
}

//This is an example of a type alias, replacing the code with an 'alias'
type userId = stringOrNumber;

//In terms of type vs interface, an interface can be seen as an object or a class whereas a type can be seen as an alias


//Literal types:
let myName: 'Will'

//Example of DRY practice
let userName: 'Will' |'Mark' | 'Dave'
userName = 'Dave' //Only the names mentioned above can be used for the userName variable


//Functions
const add = (a: number, b: number): number => {
    return a + b;
}

//'Void' is for functions that do not return anything
const logMsg = (message: any): void => {
    console.log(message);
}

logMsg('Hello');
logMsg(add(2, 3));

//The following wouldn't work since the 'add' function expects numbers as a return
// logMsg(add('a', 3));

//Functions does not require an arrow like arrow functions do
let subtract = function (c: number, d: number): number {
    return c - d;
}

//Both type or interface work for the following mathFunction
// type mathFunction = (a: number, b: number) => number

interface mathFunction {
    (a: number, b: number): number
} 

//mathFunction is an alias in this case
let multiply: mathFunction = function (c,d) {
    return c * d
}

logMsg(multiply(2, 2));


//Optional parameters
const addAll = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined') {
        return a + b + c;
    }
    return a + b
}

//Default parameter value for 'a' and 'c'
const sumAll = (a: number = 10, b: number, c: number = 2): number => {
        return a + b + c;
}

logMsg(addAll(2, 3, 2));
logMsg(addAll(2, 3));
logMsg(sumAll(2, 3));

//To skip the value assigned for 'a' when calling the function. This works since 10 is passed as the default value for 'a', 3 is called for 'b' and 'c' is already assigned the default value of 2
logMsg(sumAll(undefined, 3));


//Rest parameters
const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr)
}

const otherTotal = (a: number, ...nums: number[]): number => {
    return a + nums.reduce((prev, curr) => prev + curr)
}

//The required parameter for otherTotal should be the first entry, the 'rest' will follow after the first entry
logMsg(otherTotal(1, 2));


//The 'Never' type is explicitly for functions that throw errors
const createErr = (errorMsg: string): never => {
    throw new Error(errorMsg)
}

//Make sure to throw an error for the 'never' type, as the function could potentially contain an endless loop
const infinite = () => {
    let i: number = 1
    while (true) {
        i++
        if (i > 100) break //This is method to throw an error or stop the function in this case
    }
}

//Custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number'
    ? true : false
}


const numOrString = (value: number | string): string => {
    if (typeof value === 'string') {
        return 'string'
    }
    if (typeof value === 'number') {
        return 'number'
    }
    // or
    // if (isNumber(value)) {
    //     return 'number'
    // }
    //We are returning a never type below, needs an explicit return
    return createErr('This should not happen.')
}