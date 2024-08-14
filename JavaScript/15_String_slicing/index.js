// string slicing = creating a substring 
//                            from a portion of another string
//                            string.slice(start, end)

/*
const fullName = "Fajszi Adam";

let firsName = fullName.slice(0, 5 + 1);
let lastName = fullName.slice(fullName.indexOf("A"));
console.log(firsName);
console.log(lastName);

let firsChar = fullName.slice(0,1);
let lastChar = fullName.slice(-1);
console.log(firsChar);
console.log(lastChar);
*/

/*
let firsName = fullName.slice(0, fullName.indexOf(" "));
console.log(firsName);
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(lastName);
*/

const email = "fajsziadi@gmail.com";
console.log(email);

let userName = email.slice(0, email.indexOf("@"));
console.log(userName);

let extension = email.slice(email.indexOf("@") + 1);
console.log(extension);