// arrow functions = a concise way to write function expressions
//                   good for simple functions that you use only once
//                      (parameters) => some code


//FUNCTION DECLARATION
function hello(){
    console.log("Hello")
}

hello();

//FUNCTION EXPRESSIONS
const helloo = function(name, age){
    console.log(`Helloo ${name} ${age}`)
}

helloo("Adamm", 26)

//ARROW FUNCTION
//EXAMPLE 1
const hellooo = () => console.log("Hellooo");

hellooo();

const heLLo = (name, age) => {console.log(`Hello ${name}`)
                                console.log(`You are ${age} years old.`)};

heLLo("Adam", 25);

//EXAMPLE 2
/*
setTimeout(function helllo(){
    console.log("Helllo")
}, 3000);
*/

setTimeout( () => console.log("Helllo"), 3000);

//EXAMPLE 3
const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map((element) => Math.pow(element, 2));
console.log(squares);

const cube = numbers.map((element) => Math.pow(element, 3));
console.log(cube);

const oddNums = numbers.filter((element) => element % 2 !== 0);
console.log(oddNums);

const evenNums = numbers.filter((element) => element % 2 === 0);
console.log(evenNums);

const total = numbers.reduce((previous, next) => previous + next);
console.log(total);