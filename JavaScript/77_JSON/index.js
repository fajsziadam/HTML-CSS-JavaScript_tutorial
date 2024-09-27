// JSON = (JavaScript Object Notation) data-interchange format 
//                Used for exchanging data between a server and a web application
//                JSON files {key:value} OR [value1, value2, value3]
//                                       OR [   {},    {},    {}   ]

// JSON.stringify() = converts a JS object to a JSON string.
// JSON.parse() = converts a JSON string to a JS object


//JSON.stringify()
const names1 = ["Adam", "Emese","Akos","Tomi"];
const person1 = {
    "name" : "Adam",
    "age" : 25,
    "isEmployed" : true,
    "hobbies" : ["Gaming", "Cooking", "Sport"]
};

const people1 = [{
    "name" : "Adam",
    "age" : 25,
    "isEmployed" : false
},
{
    "name" : "Emese",
    "age" : 25,
    "isEmployed" : true
},
{
    "name" : "Akos",
    "age" : 25,
    "isEmployed" : true
},{
    "name" : "Tomi",
    "age" : 27,
    "isEmployed" : false
}];

console.log("JSON.stringify() --> Converts a JS object to a JSON string")

console.log(names1);
const jsonString1 = JSON.stringify(names1);
console.log(jsonString1);
console.log("")

console.log(person1);
const jsonString2 = JSON.stringify(person1);
console.log(jsonString2);
console.log("")

console.log(people1);
const jsonString3 = JSON.stringify(people1);
console.log(jsonString3);
console.log("")

console.log("")

// JSON.parse()
const names2 = `["Adam", "Emese","Akos","Tomi"]`;

const person2 = `{"name" : "Adam", "age" : 25, "isEmployed" : true,
                    "hobbies" : ["Gaming", "Cooking", "Sport"]}`;

const people2 = `[{"name" : "Adam", "age" : 25,"isEmployed" : false},
                {"name" : "Emese", "age" : 25, "isEmployed" : true},
                {"name" : "Akos", "age" : 25, "isEmployed" : true},
                {"name" : "Tomi", "age" : 27, "isEmployed" : false}]`;

console.log("JSON.parse() = converts a JSON string to a JS object");

console.log(names2);
const jsonString1_1 = JSON.parse(names2);
console.log(jsonString1_1);
console.log("")

console.log(person2);
const jsonString1_2 = JSON.parse(person2);
console.log(jsonString1_2);
console.log("")

console.log(people2);
const jsonString1_3 = JSON.parse(people2);
console.log(jsonString1_3);
console.log("")

fetch("names.json")
    .then(response => response.json())
    .then(value => console.log(value));

fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value));

fetch("people.json")
    .then(response => response.json())
    .then(value => console.log(value));

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.error(error));

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.age)))
    .catch(error => console.error(error));

fetch("people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.isEmployed)))
    .catch(error => console.error(error));
