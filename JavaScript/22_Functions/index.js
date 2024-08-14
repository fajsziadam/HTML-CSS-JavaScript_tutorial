// function = A section of reusable code.
//                    Declare code once, use it whenever you want.
//                    Call the function to execute that code.

/*
let name = "Adam";
let age = 25;

function happyBirthday()){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${name}!`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old!`);
}
happyBirthday();
*/

                    //parameters --> Order is important.
function happyBirthday(name, age){
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log(`Happy birthday dear ${name}!`);
    console.log("Happy birthday to you!");
    console.log(`You are ${age} years old!`);
}

happyBirthday("Adam", 25); //arguments
happyBirthday("Emese", 25);
happyBirthday("Krisz", 28);


/*
function happyBirthday(){
    window.alert("Happy Birthday to you");
}

happyBirthday();
*/

//function add(x, y){
//    let result = x + y;
//    return result;
//}

//ADD
function add(x, y){
    return x + y;
}

let answer = add(2, 3);
console.log(answer);

console.log(add(2, 5))

//SUBTRACT
function subtract(x, y){
    return x - y;
}

console.log(subtract(20, 6));

//MULTIPLY
function multiply(x, y){
    return x * y;
}

console.log(multiply(5, 9));

//DIVIDE

function divide(x, y){
    return x / y ;
}

console.log(divide(2, 3));

//EVEN OR NOT
function isEven(number){
    /*
    if(number % 2 === 0){
        return true;
    }
    else{
        return false;
    }
        */

    return number % 2 === 0 ? true : false;
}

console.log(isEven(10));
console.log(isEven(11));

//EMAIL IS VALID
function isValidEmail(email){

    /*
    if(email.includes("@")){
        return true;
    }
    else{
        return false;
    }
*/
    return email.includes("@") ? true : false;

}

console.log(isValidEmail("fajsziadi@gmail.com"));
console.log(isValidEmail("fajszi.com"));