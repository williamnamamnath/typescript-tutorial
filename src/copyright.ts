//Original JS code
// const year = document.getElementById('year')
// const thisYear = new Date().getFullYear()
// year.setAttribute('datetime', thisYear)
// year.textContent = thisYear


//1st solution to the original code 
// let year: HTMLElement | null 
// year = document.getElementById('year')
// let thisYear: string 
// thisYear = new Date().getFullYear().toString()
// if (year) {
//     year.setAttribute('datetime', thisYear)
//     year.textContent = thisYear
// }


//2nd solution to the original code
const year = document.getElementById('year') as HTMLSpanElement
const thisYear: string = new Date().getFullYear().toString()
//Since we declared that 'year' is an HTMLSanElement, and there is no union for a 'null' value, we can get rid of the if statement as seen in the 1st solution
year.setAttribute('datetime', thisYear)
year.textContent = thisYear
