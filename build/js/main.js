"use strict";
//Generics act as a placeholder for the type of a value
const stringEcho = (arg) => arg;
//or
//<x> is a type variable/parameter. The example below is a generic
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null);
};
console.log(isObj(true)); //returns false
console.log(isObj('John')); //returns false
console.log(isObj([1, 2, 3])); //returns false
console.log(isObj({ name: 'John' })); //returns true
console.log(isObj(null)); //returns false
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('Will'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: 'Will' }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBooleanValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
//Narrowing the generic type by extending the type value <T>, the type will need to have an 'id' property
const processUser = (user) => {
    return user;
};
console.log(processUser({ id: 1, name: 'Will' }));
//This wouldn't work as when we're calling the 'processUser' function, we're missing the HasId type
//console.log(processUser({ name: 'Will' }));
//T can be seen as an object that has an id, K is the keys of T (the user objects)
const getUsersProperty = (users, key) => {
    return users.map(user => user[key]);
};
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
];
//When typing out a string hwn calling the getUsersProperty function, Intellisense gives us a list of objects to choose from usersArray defined above
console.log(getUsersProperty(usersArray, "email"));
console.log(getUsersProperty(usersArray, "username"));
//Using a generic in a class
class StateObj {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObj('Will');
console.log(store.state);
store.state = 'William';
//This doesn't work as we already declared that the type of object targeted is a string when we typed 'Will' when creating an instance of the class above
//store.state = 21
//The console log below works as we specified what kind of types we could accept when creating an instance of the StateObj class
const myState = new StateObj([21]);
myState.state = ['Will', 43, true];
console.log(myState.state);
