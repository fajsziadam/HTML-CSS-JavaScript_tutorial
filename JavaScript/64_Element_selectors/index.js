// element selectors = Methods used to target and manipulate HTML elements 
//                                     They allow you to select one or multiple HTML elements
//                                     from the DOM (Document Object Model)

// 1. document.getElementById()                 // ELEMENT OR NULL
// 2. document.getElementsClassName()  // HTML COLLECTION
// 3. document.getElementsByTagName() // HTML COLLECTION
// 4. document.querySelector()                    // FIRST ELEMENT OR NULL
// 5. document.querySelectorAll()               // NODELIST


//1. document.getElementById()

//const myHeading = document.getElementById("my-headingg"); //typo --> null 

const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "Yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);

//2. document.getElementsClassName()  // HTML COLLECTION
//HTML Collections are live(not static), they update automatically in the Dom HTML

const fruits = document.getElementsByClassName("fruits");

console.log(fruits);

fruits[0].style.backgroundColor = "Yellow";
fruits[1].style.backgroundColor = "Orange";
fruits[2].style.backgroundColor = "lightgreen";

for(let fruit of fruits){
    fruit.style.backgroundColor = "Orange"
}

Array.from(fruits).forEach(fruit => {
    fruit.style.backgroundColor = "lightblue"
});

// 3. document.getElementsByTagName() // HTML COLLECTION
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

console.log(h4Elements);

h4Elements[0].style.backgroundColor = "Yellow";
h4Elements[1].style.backgroundColor = "Red";

for(let h4Element of h4Elements){
    h4Element.style.backgroundColor = "Orange";
}

/*
for(let liElement of liElements){
    liElement.style.backgroundColor = "Orange";
}*/

Array.from(liElements).forEach(liElement => {
    liElement.style.backgroundColor = "Lightgreen";
});


// 4. document.querySelector()                    // FIRST ELEMENT OR NULL
//querySelector only return a single element; the first match
const element = document.querySelector(".fruits");
element.style.backgroundColor = "Yellow"; 

const element1 = document.querySelector("h4");
element1.style.backgroundColor = "Yellow"; 

const element2 = document.querySelector("li");
element2.style.backgroundColor = "Yellow";

const element3 = document.querySelector("ol");
console.log(element3)

// 5. document.querySelectorAll()               // NODELIST

//Returns a nodelist --> a nodelist is similar to an HTML collection
//Expect it has built-in methods --> similar to arrays
//Nodelists are static --> don't update automatically in the Dom HTML

const fruits2 = document.querySelectorAll(".fruits");
fruits2[0].style.backgroundColor = "red";

const foods = document.querySelectorAll("li");
foods[0].style.backgroundColor = "red";

console.log(foods);

foods.forEach(food => {
    food.style.backgroundColor = "green";
});