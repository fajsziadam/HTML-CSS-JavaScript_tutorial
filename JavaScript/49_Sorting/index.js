// sort() = method used to sort elements of an array in place.
//               Sorts elements as strings in lexicographic order, not alphabetical
//               lexicographic = (alphabet + numbers + symbols) as strings


let fruits = ["apple", "orange", "banana", "coconut", "pineapple"];

console.log(fruits.sort());

let numbers = [1, 10, 2, 9, 3, 8, 4, 7, 5, 6];

console.log(numbers.sort());
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.sort((a, b) => b - a));

const people = [{name: "Adam", age: 25, gpa: 3.0},
                {name: "Emese", age: 25, gpa: 2.5},
                {name: "Tom", age: 2, gpa: 1.0},
                {name: "macska", age: 28, gpa: 1.4},
                {name: "Akos", age: 26, gpa: 2.3}];

/*
people.sort((a, b) => a.age - b.age);
console.log(people);
*/

//console.log(people.sort((a, b) => a.age - b.age));
//console.log(people.sort((a, b) => b.gpa - a.gpa));
//console.log(people.sort((a, b) => a.name.localeCompare(b.name)));
console.log(people.sort((a, b) => a.name.localeCompare(b.name)));