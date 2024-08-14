// How to accept user input

// 1. Window prompt
let username;
let username3 = "Adam";
let counter = 0;

username = window.prompt("What's my name?");
while(username != username3){
    if(counter == 5){
        window.prompt(`You lose! My name is ${username3}`)
        break;
    }else{
    if(username != username3){
        username = window.prompt("Nope. Try again!");
        counter++;
    }
}
}if(username==username3){
    window.prompt("Congratuation! You win!")}

console.log(username);




// 2. HTML textbox
let username2;

document.getElementById("mySubmit").onclick = function(){
    username2 = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username2}`
    };