// array = a variable like structure that can 
//             hold more than 1 value

let fruits = ["apple", "orange", "banana"];

fruits[3] = "coconut";

fruits.pop();       // delete an element from the end
fruits.push("kiwi"); // add an element to the end

fruits.shift();         //remove an element from the begining
fruits.unshift("mango"); //add an element to the begining

let numberOfFruits = fruits.length
let index = fruits.indexOf("orange")

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits);
console.log(numberOfFruits);
console.log(index)

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for(let i = 0; i < fruits.length; i+=2){
    console.log(fruits[i]);
}

for(let i = fruits.length - 1; i >= 0; i--){
    console.log(fruits[i]);
}

fruits.sort();

for(let fruit of fruits){
    console.log(fruit);
}

fruits.sort().reverse();

for(let fruit of fruits){
    console.log(fruit);
}