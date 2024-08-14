// arithmetic operators = operands (values, variables, etc.)
//                                         operators (+ - * /)
//                                         ex. 11 = x + 5;

let students = 30;
console.log(students);
students = students + 1;
console.log(students);
students = students - 1;
console.log(students);
students = students * 2;
console.log(students);
students = students / 2;
console.log(students);
students = students ** 2;
console.log(students);
let extraStudents = students % 3;
console.log(extraStudents);

//augmented assignment operators
students = 30;
students += 1;
console.log(students);
students -= 2;
console.log(students);
students *= 2;
console.log(students);
students /= 2;
console.log(students);
students **= 2;
console.log(students);
students %= 2;
console.log(students);

// increment/decrement
students = 30;
students++;
console.log(students);
students--;
console.log(students);

//Operator precedence
/*
    operator precedence
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo
    4. addition & subtraction
*/
let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);