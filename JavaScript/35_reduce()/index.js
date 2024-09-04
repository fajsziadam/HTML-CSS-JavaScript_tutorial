// .reduce() = reduce the elements of an array
//                     to a single value   


//GRADES
const grades = [75, 50, 90, 80, 65, 95];
const maxScore = grades.reduce(getMax);
const minScore = grades.reduce(getMin);

console.log(maxScore);
console.log(minScore);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}


//PRICES
const prices = [5, 10, 20 ,30, 50, 25];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

function sum(previous, next){
    return previous + next;
}