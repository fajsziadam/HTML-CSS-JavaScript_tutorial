// function expressions = a way to define functions as
//                                           values or variables

const hello = function(){
    console.log("Hello")
}

hello();

setTimeout(function(){
    console.log("Hello");
}, 2000)

const numbers = [1, 2, 3, 4, 5, 6];

const squares = numbers.map(function(element){
    return Math.pow(element, 2);
});

const cubes = numbers.map(function(element){
    return Math.pow(element, 3);
});

const evenNumbers = numbers.filter(function(element){
    return element % 2 === 0;
});

const oddNumbers = numbers.filter(function(element){
    return element % 2 !== 0;
});

const total = numbers.reduce(function(accumulator, element){
    return accumulator + element;
});

console.log(squares);
console.log(cubes);
console.log(evenNumbers);
console.log(oddNumbers);
console.log(total);