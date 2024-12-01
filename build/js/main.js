"use strict";
//Index signatures
// interface TransactionObj {
//    [index: string]: number //also valid
//     Pizza: number,
//     Books: number,
//     Job: number
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
console.log(todaysTransactions['Will']); //returns undefined. TS allows this but index signatures are not entirely safe
const student = {
    name: 'Will',
    GPA: 3.5,
    classes: [100, 200] //'?' means optional
};
//Even if we don't have a 'test' key yet, this is still valid thanks to the index signature in the Student interface. "Maybe there will be a 'test' created eventually"
//console.log(student.test);
//If key is not defined in the interface, there is another way to proceed. The console log below results in an error since the key is commented out above. 
// for (const key in student) {
//     console.log(`${key}: ${student[key]}`);
// }
//This works even though the key is not explicitly defined. keyof allows us to use the type literals as defined in the Student interface
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
//This will reference the types used in the 'student' const, which are strings, numbers and array of numbers
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
logStudentKey(student, 'name');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
