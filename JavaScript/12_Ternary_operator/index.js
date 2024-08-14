// ternary operator = a shortcut to if{} and else{} statements
//                                  helps to assign a variable based on a condition
//                                  condition ? codeIfTrue : codeIfFalse;

//let age = 155;
//let message = age >= 18 ? "You are an adult" : "You are a minor";
//console.log(message);

/*
let message;
if(age >= 18){
    message = "You are an adult";
}
else{
    message = "You are a minor";
}*/

/*
let time = 11;
let greeting = time < 12 ? "Good morning!" : "Good aftermoon!";
console.log(greeting);
*/

/*
let isStudent = true;
let message = isStudent ? "You are a student" : "You are NOT a student";
console.log(message);
*/

let purchaseAmount = 999;
let discount = purchaseAmount >= 100 ? 10 : 0
console.log(`Your total is $${purchaseAmount - purchaseAmount * (discount / 100)}`)