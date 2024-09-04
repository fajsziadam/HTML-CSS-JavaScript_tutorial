// constructor = special method for defining the
//                          properties and methods of objects

function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Ford", "Mustang", 2024, "blue");
const car2 = new Car("Skoda", "Fabia", 2006, "red")
const car3 = new Car("Audi", "RS6", 2020, "black")
const car4 = new Car("Lada","1200",1980 ,"grey");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
console.log(car1.year + " " + car1.color + " "+ car1.make + " " + car1.model);
console.log(`${car1.year} ` + (car1.color.charAt(0).toUpperCase() + car1.color.slice(1) + ` ${car1.make}  ${car1.model}.`));


console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);

console.log(car4.make);
console.log(car4.model);
console.log(car4.year);
console.log(car4.color);

car1.drive();
car2.drive();
car3.drive();
car4.drive();