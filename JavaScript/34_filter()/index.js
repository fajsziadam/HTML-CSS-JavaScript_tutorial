// .filter() = creates a new array by filtering out
//                 elements with a callback

//WORDS
console.log("WORDS")

const words = ["apple", "orange", "banana", "coconut", "kiwi","strawberry"]
const shortWords = words.filter(getShortWords);
const longWords = words.filter(getLongWords);


console.log(shortWords);
console.log(longWords);


function getShortWords(element){
    return element.length <= 6;
}

function getLongWords(element){
    return element.length > 6;
}


//AGES
console.log("AGES")

const ages = [16, 17, 18, 18, 19, 20, 60];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

console.log(adults);
console.log(children);

function isAdult(element){
    return element >= 18;
}

function isChild(element){
    return element < 18;
}

//NUMBERS
console.log("NUMBERS")

let numbers = [1, 2, 3, 4, 5, 6, 7];
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);
console.log(oddNums);

function isEven(element){
    return element % 2 === 0;
}

function isOdd(element){
    return element % 2 !== 0;
}