// variable scope = where a variable is recognized
//                               and accessible (local vs global)  


//GLOBAL scope
let y = 3;      //Variable declared outside of a function has GLOBAL scope

function1();
function2();

//LOCAL scope
function function1(){
    let x = 1;      //Inside the function it has local scope
    console.log(x);
    console.log(y);
}


function function2(){
    let x = 2;
    let y = 5;
    console.log(x);
    console.log(y);
}