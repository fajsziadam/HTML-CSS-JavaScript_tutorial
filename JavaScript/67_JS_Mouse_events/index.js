// eventListener = Listen for specific events to create interactive web pages
//                             events: click, mouseover, mouseout
//                             .addEventListener(event, callback);

const mybox = document.getElementById("myBox");
const myButton = document.getElementById("myBtn");

//mybox.addEventListener(event, callback);

/*
function changeColor(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 🤕"
}

mybox.addEventListener("click", changeColor);
*/

/*mybox.addEventListener("click", function(event){
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 🤕"
});
*/
/*
mybox.addEventListener("click", (event) =>{
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCH! 🤕"
});

mybox.addEventListener("mouseover", (event) =>{
    event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Don't do it! 😯"
});

mybox.addEventListener("mouseout", (event) =>{
    event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click me! 😁"
});*/

myButton.addEventListener("click", (event) =>{
    mybox.style.backgroundColor = "tomato";
    mybox.textContent = "OUCH! 🤕"
});

myButton.addEventListener("mouseover", (event) =>{
    mybox.style.backgroundColor = "yellow";
    mybox.textContent = "Don't do it! 😯"
});

myButton.addEventListener("mouseout", (event) =>{
    mybox.style.backgroundColor = "lightgreen";
    mybox.textContent = "Click me! 😁"
});