// -------------- EXAMPLE 1 <h1> --------------

/*
// STEP 1 CREATE THE ELEMENT
const newH1 = document.createElement("h1");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newH1.textContent = "I like pizza!";
newH1.id = "myH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// STEP 3 APPEND ELEMENT TO DOM
//document.body.append(newH1);    //Append an element to parent --> last child
//document.body.prepend(newH1);   //Prepend an element to parent --> last child

//document.getElementById("box1").append(newH1);
document.getElementById("box1").prepend(newH1);

//document.getElementById("box2").append(newH1);
//document.getElementById("box3").append(newH1);
//document.getElementById("box4").append(newH1);

//const box2 = document.getElementById("box2");

//document.body.insertBefore(newElement, currentElement);
//document.body.insertBefore(newH1, box2);

//If there are no IDs:
//const boxes = document.querySelectorAll(".box");
//document.body.insertBefore(newH1, boxes[1]);

// REMOVE HTML ELEMENT
//document.body.removeChild(newH1);

document.getElementById("box1").removeChild(newH1);*/



// -------------- EXAMPLE 2 <li> --------------

// STEP 1 CREATE THE ELEMENT
const newListElement = document.createElement("li");

// STEP 2 ADD ATTRIBUTES/PROPERTIES
newListElement.textContent = "coconut";
newListElement.id = "coconut";
newListElement.style.fontWeight = "bold";
newListElement.style.background = "lightgreen";

// STEP 3 APPEND ELEMENT TO DOM
//document.body.append(newListElement);
//document.body.prepend(newListElement);
//document.getElementById("fruits").append(newListElement)
//document.getElementById("fruits").prepend(newListElement)

//const orange = document.getElementById("orange");
//document.getElementById("fruits").insertBefore(newListElement, orange);


//If there are no IDs(li):
const listItems = document.querySelectorAll("#fruits li");
document.getElementById("fruits").insertBefore(newListElement, listItems[1]);

// REMOVE HTML ELEMENT
document.getElementById("fruits").removeChild(newListElement);