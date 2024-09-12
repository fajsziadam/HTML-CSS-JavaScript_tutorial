// nested objects = Objects inside of other Objects.
//                               Allows you to represent more complex data structures
//                               Child Object is enclosed by a Parent Object

//                               Person{Address{}, ContactInfo{}}
//                               ShoppingCart{Keyboard{}, Mouse{}, Monitor{}}  

//EXAMPLE 1
console.log("EXAMPLE 1")

const person = {
    fullName: "Adam Fajszi",
    age: 25,
    isStudent: false,
    hobbies: ["sport", "gaming", "cooking"],
    address: {
        street: "4 Kolozsvar utca",
        city: "Baja",
        country: "Hungary"
    }
}

console.log(person.fullName);
console.log(person.age);
console.log(person.isStudent);

console.log(person.hobbies);
console.log(person.hobbies[1]);

console.log(person.address);
//console.log(person.address.city);

for(const property in person.address){
    console.log(person.address[property]);
}

console.log(" ")

//EXAMPLE 2
console.log("EXAMPLE 2")

class Person{

    constructor(name, age, ...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{

    constructor(street, city, country){
        this.street = street;
        this.city = city;
        this. country = country;
    }
}

const person1 = new Person("Adam", 25, "5 Kápolna utca",
                                         "Jánoshalma", "Hungary");

const person2 = new Person("Emese", 25, "8 József Attila utca",
                                            "Szeremle", "Hungary");

const person3 = new Person("Cica", 25, "4 Kolozsvár utca",
                                                "Baja", "Hungary");

console.log(person1.name);
console.log(person1.age);
console.log(person1.address);
console.log(person1.address.street);
console.log(person1.address.city);
console.log(person1.address.country);

console.log(person2.address.city);
console.log(person3.address.city);