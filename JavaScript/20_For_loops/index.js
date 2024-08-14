// for loop = repeat some code a LIMITED amount of times

//Increment
for(let i = 0; i < 10; i++){
    console.log(i)
}

for(let i = 2; i <= 10; i+=2){
    console.log(i)
}

//Decrement
for(let i = 10; i > 0; i--){
    console.log(i)
}
console.log("HAPPY NEW YEAR!")

//Break and continue
for(let i = 1; i <= 20; i++){
    if(i == 13){
        continue;   //skip 13
    }
    else{
    console.log(i)
    }
}

for(let i = 1; i <= 20; i++){
    if(i == 13){
        break;    // exit the for loop
    }
    else{
    console.log(i)
    }
}