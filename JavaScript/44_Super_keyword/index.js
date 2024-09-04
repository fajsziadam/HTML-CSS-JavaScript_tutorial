// super = keyword is used in classes to call the constructor or
//               access the properties and methods of a parent (superclass)
//               this = this object
//               super = the parent

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}km/h`);
    }

}

class Tiger extends Animal{
    
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}

class Cat extends Tiger{  
}

class Shark extends Animal{

    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
    swim(){

        console.log(`This ${this.name} can swim`)
        super.move(this.swimSpeed)
    }
}

class Owl extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){

        console.log(`This ${this.name} can fly`)
        super.move(this.flySpeed)
    }

}

const tiger = new Tiger("tiger", 10, 50);
console.log(tiger.name);
console.log(tiger.age);
console.log(tiger.runSpeed);
tiger.run();

const cat = new Cat("cat", 3, 28);
console.log(cat.name);
console.log(cat.age);
console.log(cat.runSpeed + " km/h");
cat.run();

const shark = new Shark("shark", 20, 30);
console.log(shark.name);
console.log(shark.age);
console.log(shark.swimSpeed);
shark.swim();

const owl = new Owl("owl", 5, 60);
console.log(owl.name);
console.log(owl.age);
console.log(owl.flySpeed);
owl.fly();