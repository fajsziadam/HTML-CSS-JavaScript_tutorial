// setTimeout() = function in JavaScript that allows you to schedule
//                            the execution of a function after an amount of time 
//                            Times are approximate

//                            setTimeout(callback, delay);


/*
//setTimeout() callback
function sayHello(){
    window.alert("Hello");
}

setTimeout(sayHello, 1000);

//setTimeout() anonymus function
setTimeout(function(){
    window.alert("Hello")}, 2000);

//setTimeout() arrow function
setTimeout(() => {window.alert("Hello")}, 3000);
*/
/*
//clearTimeout(timeoutId) = can cancle a timeout before it triggers
const timeoutId = setTimeout(() => {window.alert("Hello")}, 3000);

clearTimeout(timeoutId);
*/

let timeoutId;

function startTimer(){
    timeoutId = setTimeout(() => window.alert("Hello"), 3000);
    console.log(`You clicked to the START button.`)
}

function clearTimer(){
    clearTimeout(timeoutId);
    console.log(`You clicked to the CLEAR button.`)
}