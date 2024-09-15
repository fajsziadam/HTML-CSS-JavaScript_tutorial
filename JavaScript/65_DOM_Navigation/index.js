// DOM Navigation = The process of navigating through the structure 
//                                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children


// --------------- firstElementChild ---------------
const element1 = document.getElementById("fruits");
const firstChild1 = element1.firstElementChild;

firstChild1.style.backgroundColor = "yellow";

const element2 = document.getElementById("vegetables");
const firstChild2 = element2.firstElementChild;

firstChild2.style.backgroundColor = "orange";

const element3 = document.getElementById("desserts");
const firstChild3 = element3.firstElementChild;

firstChild3.style.backgroundColor = "lightgreen";

const ulElements1 = document.querySelectorAll("ul"); //return a nodelist

ulElements1.forEach(ulElement => {
    const firstchild = ulElement.firstElementChild;
    firstchild.style.backgroundColor = "yellow";
});


// --------------- lastElementChild ---------------
const element2_1 = document.getElementById("fruits");
const lastChild2_1 = element2_1.lastElementChild;
lastChild2_1.style.backgroundColor = "orange";

const element2_3 = document.getElementById("desserts");
const lastChild2_3 = element2_3.lastElementChild;
lastChild2_3.style.backgroundColor = "orange";



const ulElements2 = document.querySelectorAll("ul"); //return a nodelist

ulElements2.forEach(ulElement => {
    const lastChild = ulElement.lastElementChild;
    lastChild.style.backgroundColor = "orange";
});


// --------------- nextElementSibling ---------------
const nextElement1 = document.getElementById("orange");
const nextSibling1 = nextElement1.nextElementSibling;

nextSibling1.style.backgroundColor = "lightgreen";

const nextElement2 = document.getElementById("carrots");
const nextSibling2 = nextElement2.nextElementSibling;

nextSibling2.style.backgroundColor = "lightgreen";

const nextElement3 = document.getElementById("vegetables"); //next unorderedlist is desserts
const nextSibling3 = nextElement3.nextElementSibling;

nextSibling3.style.backgroundColor = "lightgreen";


// --------------- previousElementSibling ---------------
const previousElement1 = document.getElementById("banana");
const previousSibling1 = previousElement1.previousElementSibling;

previousSibling1.style.backgroundColor = "blue";

const previousElement2 = document.getElementById("onions");
const previousSibling2 = previousElement2.previousElementSibling;

previousSibling2.style.backgroundColor = "blue";

const previousElement3 = document.getElementById("desserts");
const previousSibling3 = previousElement3.previousElementSibling;

previousSibling3.style.backgroundColor = "blue";


// --------------- parentElement ---------------
const parElement = document.getElementById("apple");
const parent = parElement.parentElement;
parent.style.backgroundColor = "Yellow";


// --------------- children ---------------
const chiElement = document.getElementById("fruits");
const children = chiElement.children;

Array.from(children).forEach(child => {
    child.style.backgroundColor = "brown";
});

const chiElement2 = document.getElementById("vegetables");
const children2 = chiElement2.children;

children2[1].style.backgroundColor = "brown";