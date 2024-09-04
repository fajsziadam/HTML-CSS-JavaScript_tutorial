// static = keyword that defines properties or methods that belong 
//               to a class itself rather than the objects created
//               from that class (class owns anything static, not the objects)

//EXAMPLE 1:
console.log("EXAMPLE 1:");

class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        //return 2 * this.PI * radius
        return Number(this.getDiameter(radius) * this.PI);
    }

    static getArea(radius){
        //return this.PI * radius * radius;
        return this.PI * Math.pow(radius, 2);
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));
console.log(MathUtil.getArea(10));
console.log(" ");

//EXAMPLE 2:
console.log("EXAMPLE 2:");

class User{
    static userCount = 0;

    constructor(username){
        this.username = username;
        User.userCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.userCount} users online.`);
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}.`)
    }

}

const user1 = new User("Adam");
const user2 = new User("Emese");
const user3 = new User("Tom");

//console.log(user1.username);
//console.log(user2.username);
//console.log(user3.username);

user1.sayHello();
user2.sayHello();
user3.sayHello();

//console.log(User.userCount);
User.getUserCount();