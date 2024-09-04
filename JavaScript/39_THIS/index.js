// this = reference to the object where THIS is used
//           (the object depends on the immediate context)
//          person.name = this.name

const person1 = {
    name: "Adam",
    favFood: "Pizza",
    sayHello: function(){console.log(`Hi! I am ${this.name} and my favourite food is ${this.favFood}.`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

const person2 = {
    name: "Emese",
    favFood: "Hamburger",
    sayHello: function(){console.log(`Hi! I am ${this.name} and my favourite food is ${this.favFood}.`)},
    eat: function(){console.log(`${this.name} is eating ${this.favFood}`)}
}

person1.sayHello();
person1.eat();

person2.sayHello();
person2.eat();

console.log(this);