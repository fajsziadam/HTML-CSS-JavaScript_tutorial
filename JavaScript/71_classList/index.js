// classList = Element property in JavaScript used to interact
//                     with an element's list of classes (CSS classes)
//                     Allows you to make reusable classes for many elements
//                     across your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

/* EXAMPLE 1:
const myButton = document.getElementById("myButton");
const myH1 = document.getElementById("myH1");

myH1.classList.add("enabled");

myButton.classList.add("enabled");  //add a class to the element
myButton.classList.remove("enabled");  //remove a class to the element

/*
myButton.addEventListener("mouseover", event =>{
    myButton.classList.add("hover");
});

myButton.addEventListener("mouseout", event =>{
    myButton.classList.remove("hover");
});
*/

/*
myH1.addEventListener("mouseover", event =>{
    myH1.classList.toggle("hover");
});

myH1.addEventListener("mouseout", event =>{
    myH1.classList.toggle("hover");
});

myH1.classList.add("enabled");

myH1.addEventListener("click", event =>{

    if(myH1.classList.contains("disabled")){
        myH1.textContent += "🤕";
        myH1.classList.replace("disabled", "enabled");
    }
    else{
        myH1.classList.replace("enabled", "disabled");
    }
});

myButton.addEventListener("mouseover", event =>{
    myButton.classList.toggle("hover");
});

myButton.addEventListener("mouseout", event =>{
    myButton.classList.toggle("hover");
});

myButton.classList.add("enabled");

myButton.addEventListener("click", event =>{

    if(myButton.classList.contains("disabled")){
        myButton.textContent += "🤕";
        myButton.classList.replace("disabled", "enabled");
    }
    else{
        myButton.classList.replace("enabled", "disabled");
    }
});*/

//EXAMPLE 2:
let buttons = document.querySelectorAll(".myButtons");

buttons.forEach((button) =>{
    button.classList.add("enabled");
});

/*
buttons.forEach((button) =>{
    button.classList.remove("enabled");
});*/

buttons.forEach((button) =>{
    button.addEventListener("mouseover", (event) =>{
        event.target.classList.toggle("hover");
    });
});

buttons.forEach((button) =>{
    button.addEventListener("mouseout", (event) =>{
        event.target.classList.toggle("hover");
    });
});

function clickBtn(){
buttons.forEach((button) =>{
    button.addEventListener("click", (event) => {
        if(event.target.classList.contains("disabled")){
            event.target.classList.replace("disabled", "enabled");
            event.target.textContent += "🤕";
        }
        else{
            event.target.classList.replace("enabled", "disabled");
        }
    });
});
}

clickBtn();