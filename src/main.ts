//Generics act as a placeholder for the type of a value

const stringEcho = (arg: string): string => arg 

//or

//<x> is a type variable/parameter. The example below is a generic
const echo = <T>(arg: T): T => arg

const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

console.log(isObj(true)); //returns false
console.log(isObj('John')); //returns false
console.log(isObj([1, 2, 3])); //returns false
console.log(isObj({ name: 'John' })); //returns true
console.log(isObj(null)); //returns false


const isTrue = <T>(arg: T): { arg: T, is: boolean } => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false }
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { arg, is: false }
    }
    return { arg, is: !!arg }
}

console.log(isTrue(false)); //returns {arg: false, is: false}
console.log(isTrue(0)); //returns {arg: 0, is: false}
console.log(isTrue(true)); //returns {arg: true, is: true}
console.log(isTrue(1)); //returns {arg: 1, is: true}
console.log(isTrue('Will')); //returns {arg: 'Will', is: true}
console.log(isTrue('')); //returns {arg: '', is: false}
console.log(isTrue(null)); //returns {arg: null, is: false}
console.log(isTrue(undefined)); //returns {arg: undefined, is: false}
console.log(isTrue({})); //returns {arg: {…}, is: false}
console.log(isTrue({ name: 'Will' })); //returns {arg: {…}, is: true}
console.log(isTrue([])); //returns {arg: Array(0), is: false}
console.log(isTrue([1, 2, 3])); //returns {arg: Array(3), is: true}
console.log(isTrue(NaN)); //returns {arg: NaN, is: false}
console.log(isTrue(-0)); //returns {arg: -0, is: false}


interface booleanCheck<T> {
    value: T,
    is: boolean
}

const checkBooleanValue = <T>(arg: T): booleanCheck<T> => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false }
    }
    if (isObj(arg) && !Object.keys(arg as keyof T).length) {
        return { value: arg, is: false }
    }
    return { value: arg, is: !!arg }
}


interface HasId {
    id: number
}

//Narrowing the generic type by extending the type value <T>, the type will need to have an 'id' property
const processUser = <T extends HasId>(user: T): T => {
    return user
}

console.log(processUser({ id: 1, name: 'Will' })); 

//This wouldn't work as when we're calling the 'processUser' function, we're missing the HasId type
//console.log(processUser({ name: 'Will' }));

//T can be seen as an object that has an id, K is the keys of T (the user objects)
const getUsersProperty = <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key])
}

const usersArray = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
            "street": "Kulas Light",
            "suite": "Apt. 556",
            "city": "Gwenborough",
            "zipcode": "92998-3874",
            "geo": {
                "lat": "-37.3159",
                "lng": "81.1496"
            }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
            "name": "Romaguera-Crona",
            "catchPhrase": "Multi-layered client-server neural-net",
            "bs": "harness real-time e-markets"
        }
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
            "street": "Victor Plains",
            "suite": "Suite 879",
            "city": "Wisokyburgh",
            "zipcode": "90566-7771",
            "geo": {
                "lat": "-43.9509",
                "lng": "-34.4618"
            }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
            "name": "Deckow-Crist",
            "catchPhrase": "Proactive didactic contingency",
            "bs": "synergize scalable supply-chains"
        }
    },
]

//When typing out a string hwn calling the getUsersProperty function, Intellisense gives us a list of objects to choose from usersArray defined above
console.log(getUsersProperty(usersArray, "email")) //returns (2) ['Sincere@april.biz', 'Shanna@melissa.tv']
console.log(getUsersProperty(usersArray, "username")) //returns (2) ['Bret', 'Antonette']


//Using a generic in a class
class StateObj<T> {
    private data: T

    constructor(value: T) {
        this.data = value
    }

    get state(): T {
        return this.data
    }

    set state(value: T) {
        this.data = value
    }
}

const store = new StateObj('Will')
console.log(store.state);
store.state = 'William'

//This doesn't work as we already declared that the type of object targeted is a string when we typed 'Will' when creating an instance of the class above
//store.state = 21

//The console log below works as we specified what kind of types we could accept when creating an instance of the StateObj class
const myState = new StateObj<(string | number | boolean)[]>([21])
myState.state = ['Will', 43, true]
console.log(myState.state);

