// rest parameters = (...rest) allow a function work with a variable
//                                  number of arguments by bundling them into an array

//                                  spread = expands an array into separate elements
//                                  rest = bundles separate elements into an array

function openFridge(...foods){
    console.log(...foods);
}

function getFood(...foods){
    return foods;
}

const food1 = "pizza";
const food2 = "hamburger";
const food3 = "hotdog";
const food4 = "gyros";
const food5 = "sushi";

openFridge(food1, food2, food3, food4, food5);

const foods = getFood(food1, food2, food3, food4, food5);
console.log(foods);

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const total1 = sum(1, 2, 3, 4, 5);

console.log(`Your total is $${total1}.`)

function getAvarage(...numbers){
    let result = 0;

    for(let number of numbers){
        (result += number);
    }
    return result / numbers.length;
}

const total2 = getAvarage(1, 2, 3, 4, 5, 10).toFixed(1);
console.log(`Your total is $${total2}`);



function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Adam", "Fajszi", "IV");
console.log(fullName);
