// closure = A function defined inside of another function, 
//                  the inner function has access to the variables 
//                  and scope of the outer function.
//                  Allow for private variables and state maintenance
//                  Used frequently in JS frameworks: React, Vue, Angular


//EXAMPLE1
function outer(){

    let message = "Hello";

    function inner(){
        console.log(message);
    }

    inner();
}

message = "Goodbye";

outer();

console.log(" ");

//EXAMPLE2
/*
let count = 0;

count = 1000000

function increment(){
    //let count = 0;
    count++;
    console.log(`Count increased to ${count}`);
}

increment();
increment();
increment();*/

function createCounter(){
    let count = 0;

    function increment(){
        count++;
        console.log(`Count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    return {increment, getCount};
}

const counter = createCounter();

counter.increment();
counter.increment();
counter.increment();

for(i = 0; i < 10; i++ ){
    counter.increment();
}

/*
counter.count = 0;
console.log(count);*/ // --> count is not defined

//console.log(counter.count); // --> undefined, before the getCount function

console.log(`The current count is ${counter.getCount()}`);

console.log(" ");

//EXAMPLE3

/*
let score = 0;

function increaseScore(points){
    score += points;
    console.log(`+${points}pts`);
}

function decreaseScore(points){
    score -= points;
    console.log(`-${points}pts`);
}

function getScore(){
    return score;
}

score = 1000000;

increaseScore(5);
increaseScore(6);
decreaseScore(3);

console.log(`The final score is ${getScore()}pts`);*/

function createGame(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }

    function decreaseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }

    function getScore(){
        return score;
    }
    
    return {increaseScore, decreaseScore, getScore};
}

const game = createGame();

game.increaseScore(5);
game.increaseScore(6);
game.decreaseScore(3);

console.log(`The final score is ${game.getScore()}pts`);

