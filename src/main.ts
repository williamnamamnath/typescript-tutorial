//Utility types


//Partial type
interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean //optional 
}

//We won't require ALL of the props from assignment, which is why we used the Partial keyword
const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return {...assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: 'compsci123',
    title: 'Final project',
    grade: 0
}

console.log(updateAssignment(assign1, { grade: 80 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 80 })


//Required and Readonly types

//All keys from Assignment will need to be used
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    return assign
}

//We can't overwrite any of the Assignment properties
const assignVerified: Readonly<Assignment> = {
    ... assignGraded, verified: true
}

//This doesn't work since it is a Readonly property
//assignVerified.grade = 90

//We're missing a property, it is a Required Assignment and verified is not there
//recordAssignment(assignGraded)
//To make this work, we can do the following
//recordAssignment({ ...assignGraded, verified: true })


//Record type

//The keys and values will be strings in this caase
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00"
}

type Students = 'Sarah' | 'Mark'
type LetterGrades = 'A' | 'B' | 'C' | 'D' 

const finalGrades: Record<Students, LetterGrades> = {
    Sarah: 'B',
    Mark: 'A'
}

interface Grades {
    assign1: number,
    assign2: number
}

const gradeData: Record<Students, Grades> = {
    Sarah: { assign1: 85, assign2: 82 },
    Mark: { assign1: 90, assign2: 92 }
}


//Pick and Omit types

//We pick what we want to use from the Assignment interface
type AssignResult = Pick<Assignment, 'studentId' | 'grade'>

//All properties that were picked are used, so no issues here
const score: AssignResult = {
    studentId: 'k123',
    grade: 85
}


type AssignPreview = Omit<Assignment, 'grade' | 'verified'>

//This works since we used all of the keys except the ones we omit previously. If grade was used below, there would be errors
const preview: AssignPreview = {
    studentId: 'k123',
    title: 'Final project'
}


//Exclude and Extract types

//We exclude 'D' from the letters available
type adjustedGrade = Exclude<LetterGrades, 'D'>

//We're only interested in 'A' and 'B', we're "extracting" them
type highGrades = Extract<LetterGrades, 'A' | 'B'>


//Nonnullable type

type AllPossibleGrades = 'Will' | 'Mark' | null | undefined

//This excludes null and undefined from the AllPossibleGrades type
type NamesOnly = NonNullable<AllPossibleGrades>



//ReturnType

//type newAssign = { title: string, points: number }

const createNewAssign = (title: string, points: number) => {
    return { title, points}
}

//If we were to change createNewAssign, otherAssign would consequently update by itself rather than having to explictly modify the newAssign after every modification
type otherAssign = ReturnType<typeof createNewAssign>

const tsAssign: otherAssign = createNewAssign('Utility Types', 100)
console.log(tsAssign);



//Parameters type

type AssignParams = Parameters<typeof createNewAssign>

const assignArgs: AssignParams = ['Generics', 100]

const tsAssign2: otherAssign = createNewAssign(...assignArgs)
console.log(tsAssign2);



//Awaited type - helps with the ReturnType of a Promise

interface User {
    id: number,
    name: string,
    username: string,
    email: string,
}

const fetchUsers = async (): Promise<User[]> => {

    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res => {
        return res.json()
    }).catch(err => {
        if (err instanceof Error) console.log(err.message)
    })
    return data
}


//How do we use Awaited?

//When we hover over FetchUsersReturnType, it shows we have a Promise but we don't want that, we want the result
//type FetchUsersReturnType = ReturnType<typeof fetchUsers>

type GetUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>

//Now we get the result desired 
fetchUsers().then(users => console.log(users))


