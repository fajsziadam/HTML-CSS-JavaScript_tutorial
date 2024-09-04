// .map() = accepts a callback and applies that function 
//                 to each element of an array, then return a new array

/*
//NUMBERS
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

console.log(squares);
console.log(cubes);

function cube(element){
    return Math.pow(element, 3)
}

function square(element){
    return Math.pow(element, 2)
}*/

/*
//STUDENTS
const students = ["Adam","Emese", "Akos","Tomi"];
const studentsUpperCase = students.map(upperCase); 
const studentsLowerCase = students.map(lowerCase);

console.log(studentsUpperCase);
console.log(studentsLowerCase);

function upperCase(element){
    return element.toUpperCase();
}

function lowerCase(element){
    return element.toLowerCase();
}*/


//DATES
const dates = ["2024-08-28", "2025-2-20", "2026-04-15"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`
}