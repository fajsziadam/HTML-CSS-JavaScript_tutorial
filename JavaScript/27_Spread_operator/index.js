// spread operator =  ... allows an iterable such as an
//                                  array or string to be expanded
//                                   in to separate elements
//                                  (unpacks the elements)

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);


console.log(numbers);
console.log(`The maximum number is ${maximum}.`);
for(nums of numbers){
    console.log(nums);
}

console.log(numbers);
console.log(`The minimum number is ${minimum}.`);
for(nums of numbers){
    console.log(nums);
}

let username = "Fajszi Adam";
let letters = [...username];

console.log(letters.join(" ").toUpperCase());

let fruits = [];

fruits.push("apple");
fruits.push("lemon");
fruits.unshift("banana")
fruits.push("apple");
fruits.unshift("apple")
fruits.pop();
fruits.shift();
fruits[3] = "waterlemon";

for(fruit of fruits){
    console.log(fruit);
}

let vegetables = ["carrots", "celery", "potatoes"];
let foods = [...fruits, ...vegetables, "eggs", "milk"]; //Combine arrays

console.log(fruits);
console.log(vegetables);
console.log(foods);

console.log(" ");
console.log("For loop:");
for(food of foods){
    console.log(food);
}

console.log(" ");
console.log("Spread operator: ");
console.log(...foods);