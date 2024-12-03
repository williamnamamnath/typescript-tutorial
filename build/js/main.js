"use strict";
//Utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//We won't require ALL of the props from assignment, which is why we used the Partial keyword
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: 'compsci123',
    title: 'Final project',
    grade: 0
};
console.log(updateAssignment(assign1, { grade: 80 }));
const assignGraded = updateAssignment(assign1, { grade: 80 });
//Required and Readonly types
//All keys from Assignment will need to be used
const recordAssignment = (assign) => {
    return assign;
};
//We can't overwrite any of the Assignment properties
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
//This doesn't work since it is a Readonly property
//assignVerified.grade = 90
//We're missing a property, it is a Required Assignment and verified is not there
//recordAssignment(assignGraded)
//To make this work, we can do the following
//recordAssignment({ ...assignGraded, verified: true })
//Record type
//The keys and values will be strings in this caase
const hexColorMap = {
    red: "FF0000",
    green: "00FF00"
};
const finalGrades = {
    Sarah: 'B',
    Mark: 'A'
};
const gradeData = {
    Sarah: { assign1: 85, assign2: 82 },
    Mark: { assign1: 90, assign2: 92 }
};
//All properties that were picked are used, so no issues here
const score = {
    studentId: 'k123',
    grade: 85
};
//This works since we used all of the keys except the ones we omit previously. If grade was used below, there would be errors
const preview = {
    studentId: 'k123',
    title: 'Final project'
};
//ReturnType
//type newAssign = { title: string, points: number }
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign('Utility Types', 100);
console.log(tsAssign);
const assignArgs = ['Generics', 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.log(err.message);
    });
    return data;
});
//Now we get the result desired 
fetchUsers().then(users => console.log(users));
