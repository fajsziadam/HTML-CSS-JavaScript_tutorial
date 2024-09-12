// destructuring =  extract values from arrays and objects,
//                              then assign them to variables in a convenient way
//                              [] = to perform array destructuring
//                              {} = to perform object destructuring

//EXAMPLE 1
// SWAP THE VALUE OF TWO VARIABLES
console.log("                         EXAMPLE 1");
console.log("             SWAP THE VALUE OF TWO VARIABLES");

let a = 1;
let b = 2;

[a, b] = [b, a];

console.log("a = " + a + ", b = " + b);

console.log(" ");

//EXAMPLE 2
// SWAP 2 ELEMENTS IN AN ARRAY
console.log("                         EXAMPLE 2");
console.log("             SWAP 2 ELEMENTS IN AN ARRAY");

const colors = ["red", "green", "blue", "black", "white"];

[colors[0], colors[4]] = [colors[4], colors[0]];

console.log(colors);

console.log(" ");

//EXAMPLE 3
// ASSIGN ARRAY ELEMENTS TO VARIABLES
console.log("                         EXAMPLE 3");
console.log("             ASSIGN ARRAY ELEMENTS TO VARIABLES");

const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

console.log(" ");

//EXAMPLE 4
// EXTRACT VALUES FROM OBJECTS
console.log("                         EXAMPLE 4");
console.log("               EXTRACT VALUES FROM OBJECTS");

const person1 = {
    firstName: "Adam",
    lastName: "Fajszi",
    age: "25",

}

const person2 = {
    firstName: "Emese",
    lastName: "Lovas",
    age: "25",
    job: "Teacher"
}

const {firstName, lastName, age, job = "Unemployed"} = person1;
//const {firstName, lastName, age, job} = person1;

console.log(firstName);
console.log(lastName);
console.log(age);
console.log(job);
console.log(firstName + " " + lastName + " " + age + " " + job);

console.log(" ");

//EXAMPLE 5
//  DESTRUCTURING IN FUNCTION PARAMETERS
console.log("                         EXAMPLE 5");
console.log("           DESTRUCTURING IN FUNCTION PARAMETERS");

function displayPerson({firstName, lastName, age, job = "Unemployed"}){
    console.log(`name : ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);
}

displayPerson(person2);