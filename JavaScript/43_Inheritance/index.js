// inheritance = allows a new class to inherit properties and methods 
//                         from an existing class. (parent -> child) 
//                          Helps with code reusability

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating.`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping.`);
    }
}

class Tiger extends Animal{
    name = "tiger";

    run(){
        console.log(`This ${this.name} is running`)
    }
}

class Fish extends Animal{
    name = "fish";

    swim(){
        console.log(`This ${this.name} is swimming`)
    }
}

class Cat extends Tiger{
    name = "cat";
}

class Owl extends Animal{
    name = "owl";

    fly(){
        console.log(`This ${this.name} is flying`)
    }
}

const tiger = new Tiger();
const fish = new Fish();
const cat = new Cat();
const owl = new Owl();

console.log(tiger.alive);
tiger.eat();
tiger.sleep();
tiger.run();

console.log(cat.alive);
cat.eat();
cat.sleep();
cat.run();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();

console.log(owl.alive);
owl.eat();
owl.sleep();
owl.fly();

fish.alive = false;
console.log(fish.alive);
