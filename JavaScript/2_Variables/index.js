// variable = A container that stores a value.
//            Behaves as if it were the value it contains.

//1. declaration let x;
//2.assigment x = 100;

/*
let x;
x = 100;
//let x = 100;
let y;

console.log(x);*/

//NUMBERS:
let myAge = 25;
let price = 10.99;
let gpa = 2.1;

console.log(`You are ${myAge} years old`);
console.log(`The price is $${price}`);
console.log(`The gps is: ${gpa}`);
console.log(`you are ${price} years old $${gpa} ${myAge}`)

console.log(typeof(myAge));
console.log(typeof(price));
console.log(typeof(gpa));

//STRINGS:
let firstName = "Adam";
let favouriteFood = "pizza";
let email = "fajsziadi123@gmail.com";

console.log(typeof(firstName));
console.log(`Your name is ${firstName}`);
console.log(`Favourite food is ${favouriteFood}`);
console.log(`Your email is ${email}`);

//BOOLEANS:
let online = true;

console.log(typeof(online));
console.log(`Adam is online : ${online}`)

//EXCERCISE
let fullName = "Fajszi Adam";
let age = 25;
let isStudent = false;

document.getElementById("p1").textContent = `Your name is ${fullName}`;
document.getElementById("p2").textContent =  `You are ${age} years old.`;
document.getElementById("p3").textContent = `Enrolled:  ${isStudent}`;