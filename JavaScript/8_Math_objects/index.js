// Math = built-in object that provides a
//              collection of properties and methods

console.log("Math.PI: ");
console.log(Math.PI);

console.log("Math.E: ");
console.log(Math.E);

let x = 3.21;
let y = 2;
let z;

console.log(`x = ${x}`);
console.log("z = Math.round(x): ");
z = Math.round(x);
console.log(z);

x = 3.99;
console.log(`x = ${x}`);
console.log("z = Math.floor(x): ");
z = Math.floor(x);
console.log(z);

x = 3.21;
console.log(`x = ${x}`);
console.log("z = Math.ceil(x): ");
z = Math.ceil(x);
console.log(z);


x = 3.99;
console.log(`x = ${x}`);
console.log("z = Math.trunc(x): ");
z = Math.trunc(x);
console.log(z);


x = 4;
y = 2;
console.log(`x = ${x}, y = ${y}`);
console.log("z = Math.pow(x, y): ");
z = Math.pow(x, y);
console.log(z);

x = 81;
y = 2;
console.log(`x = ${x}, y = ${y}`);
console.log("z = Math.sqrt(x, y): ");
z = Math.sqrt(x, y);
console.log(z);

x = -3.21;
console.log(`x = ${x}`);
console.log("z = Math.abs(x): ");
z = Math.abs(x);
console.log(z);

x = 4;
y = 2;
z = 1;
console.log(`x = ${x}, y = ${y}, z = ${z}`);

console.log("max = Math.max(x,y,z):")
max = Math.max(x,y,z);
console.log(max);

console.log("min = Math.min(x,y,z)")
min = Math.min(x,y,z);
console.log(min);