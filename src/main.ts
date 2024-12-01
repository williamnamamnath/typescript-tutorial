type One = string
type Two = string | number
type Three = 'Hello'

//Converting to more or less specific
let a: One = 'Hello'

//Assignment to a less specific type
let b = a as Two

//Assignment to a more specific type
let c = a as Three

let d = <One>'world' 

//We don't need to use an alias exclusively in the angle brackets
let e = <string | number>'world' 

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    return '' + a + b
}

//This wouldn't work since myVal only accepts a string, whereas addOrConcat accepts a number or a string
// let myVal: string = addOrConcat(2, 2, 'concat')

let myVal: string = addOrConcat(2, 2, 'concat') as string

//TS sees no problem in this case, but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number

//Double casting/assertions, the example below isn't necessary valid
(10 as unknown) as string


//The DOM
const img = document.querySelector('img') as HTMLImageElement
//or
//const img = document.querySelector('img')!
//If we know that the HTML tag below exists, we can use an assertion in the img const above to declare that img isn't null
img.src

//A non-null assertion can be decalred with '!'
const myImg = document.getElementById('#img')! as HTMLImageElement
//or
//const myImg = document.getElementById('#img') as HTMLImageElement
myImg.src