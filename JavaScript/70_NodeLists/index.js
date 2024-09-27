// NodeList = Static collection of HTML elements by (id, class, element)
//                     Can be created by using querySelectorAll()
//                     Similar to an array, but no (map, filter, reduce) 
//                     NodeList won't update to automatically reflect changes

let buttons = document.querySelectorAll(".myButtons");

console.log(buttons);

// ADD HTML//CSS PROPERTIES

buttons.forEach(button => {
    button.style.backgroundColor = "green";
    button.textContent += "😁";
    button.setAttribute("data-bg", "green");
});

// CLICK event listener
buttons.forEach( (button) => {
    button.addEventListener("click", () => {
        if(button.getAttribute("data-bg") == "green"){
                button.style.backgroundColor = "tomato";
                button.setAttribute("data-bg", "tomato")
            }
        else{           
            button.style.backgroundColor = "green";
            button.setAttribute("data-bg", "green");
        }
        });
    });

//MOUSOVER + MOUSEOUT event listener
buttons.forEach((button) =>{
    button.addEventListener("mouseover", (event) =>{
        button.style.backgroundColor = "hsl(203, 92%, 75%)";
    })
});

buttons.forEach((button) =>{
    button.addEventListener("mouseout", (event) =>{
        button.style.backgroundColor = "green";
    })
});

//ADD AN ELEMENT

const newButton = document.createElement("button"); //STEP 1: Create

newButton.textContent = "Button 5";              //STEP 2: add properties
newButton.classList = "myButtons"                   //add a class to property

document.body.appendChild(newButton);               //STEP 3: append it to parent

buttons = document.querySelectorAll(".myButtons");  //NodeList don't automatically change

console.log(buttons);               //NodeList has 5 element

//REMOVE AN ELEMENT
buttons.forEach( (button) => {
    button.addEventListener("click", (event) =>{
        event.target.remove();
        buttons = document.querySelectorAll(".myButtons");
        console.log(buttons);
    });
});

