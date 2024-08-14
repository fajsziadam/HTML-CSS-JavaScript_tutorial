// logical operators =  used to combine or manipulate Boolean values 
//                                    (true or false)

// AND = &&  --> Both condition need to be true
// OR  = ||  -->
// NOT = !   --> NOT

/*
const temp = 200; //--> log = The weather is GOOD

if(temp > 0){
    console.log("The weather is GOOD");
}
else if(temp <=30) {
    console.log("The weather is GOOD");
}
else{
    console.log("The weather is BAD");
}
*/

/*
//AND(&&)  --> Both condition need to be true
const temp = 20;

if(temp > 0 && temp <=30){
    console.log("The weather is GOOD");
}
else{
    console.log("The weather is BAD");
}
*/

/*
//OR(||)  --> One of condition need to be true
const temp = 20;

if(temp <= 0 && temp >30){
    console.log("The weather is BAD");
}
else{
    console.log("The weather is GOOD");
}
*/


//NOT(!)
const isSunny = false;

if(!isSunny){
    console.log("It is CLOUDY");
}
else{
    console.log("It is SUNNY");
}