// object = A collection of related properties and/or methods
//                Can represent real world objects (people, products, places)
//                object = {key:value,
//                                 function()}

const person1 = {
    firstName : "Adam",
    lastName : "Fajszi",
    age : 25,
    isEmployed : false,
    sayHello: function(){console.log(`Hello. My name is ${this.firstName} ${this.lastName} and I'm ${this.age} years old.`)},
    eat : function(){console.log("I am eating Pizza")}
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

const person2 = {
    firstName : "Emese",
    lastName : "Lovas",
    age : 25,
    isEmployed : true,
    sayHello: () => {console.log(`Hello. My name is ${person2.firstName} ${person2.lastName} and I'm ${person2.age} years old.`)},
    eat: () => {console.log("I am eating Chocolate")}
};

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();
