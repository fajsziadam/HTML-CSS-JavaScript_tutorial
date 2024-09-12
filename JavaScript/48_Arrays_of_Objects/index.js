console.log("Array of Objects:");

const fruits1 = [{name: "apple", color: "red", calories: 95},
                {name: "banana", color: "yellow", calories: 110},
                {name: "orange", color: "orange", calories: 50},
                {name: "coconut", color: "white", calories: 160},
                {name: "lemon", color: "yellow", calories: 40}];

console.log(fruits1[0].name);
console.log(fruits1[0].color);
console.log(fruits1[0].calories);
console.log(fruits1[1].name);
console.log(fruits1[2].name);
console.log(fruits1[3].name);
console.log(fruits1[4].name),

console.log(" ");
console.log("fruits1.push():");

fruits1.push({name: "grapes", color:"purple", calories: 51});

console.log(fruits1);

console.log(" ");
console.log("fruits1.pop():");

fruits1.pop();
fruits1.pop();
console.log(fruits1);

console.log(" ");
console.log("fruits.splice():");

fruits1.splice(1, 2);
console.log(fruits1);

console.log(" ");

// ---------- forEach() ----------
console.log("forEach(): ");

const fruits2 = [{name: "apple", color: "red", calories: 95},
    {name: "banana", color: "yellow", calories: 110},
    {name: "orange", color: "orange", calories: 50},
    {name: "coconut", color: "white", calories: 160},
    {name: "lemon", color: "yellow", calories: 40}];

fruits2.forEach(fruit => console.log(fruit));
fruits2.forEach(fruit => console.log(fruit.name));
fruits2.forEach(fruit => console.log(fruit.color));
fruits2.forEach(fruit => console.log(fruit.calories));

console.log(" ");

// ---------- map() ----------
console.log("map(): ");

const fruits3 = [{name: "apple", color: "red", calories: 95},
    {name: "banana", color: "yellow", calories: 110},
    {name: "orange", color: "orange", calories: 50},
    {name: "coconut", color: "white", calories: 160},
    {name: "lemon", color: "yellow", calories: 40}];

const fruitNames = fruits3.map(fruit => fruit.name);
const fruitColors = fruits3.map(fruit => fruit.color);
const fruitCalories = fruits3.map(fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

console.log(" ");

// ---------- filter() ----------
console.log("filter(): ");

const fruits4 = [{name: "apple", color: "red", calories: 95},
    {name: "banana", color: "yellow", calories: 110},
    {name: "orange", color: "orange", calories: 50},
    {name: "coconut", color: "white", calories: 160},
    {name: "lemon", color: "yellow", calories: 40}];

const yellowFruits = fruits4.filter(fruit => fruit.color === "yellow");
const lowCalorieFruits = fruits4.filter(fruit => fruit.calories <= 100);
const highCalorieFruits = fruits4.filter(fruit => fruit.calories > 100);


console.log(yellowFruits);
console.log(lowCalorieFruits);
console.log(highCalorieFruits);

console.log(" ");

// ---------- reduce() ----------
console.log("reduce(): ");

const fruits5 = [{name: "apple", color: "red", calories: 95},
    {name: "banana", color: "yellow", calories: 110},
    {name: "orange", color: "orange", calories: 50},
    {name: "coconut", color: "white", calories: 160},
    {name: "lemon", color: "yellow", calories: 40}];

const maxFruit = fruits5.reduce( (max, fruit) => 
                                 fruit.calories > max.calories ?
                                 fruit : max);

const minFruit = fruits5.reduce( (min, fruit) => 
                                    fruit.calories < min.calories ?
                                    fruit : min);

console.log(maxFruit);
console.log(maxFruit.calories);

console.log(minFruit);
console.log(minFruit.calories);