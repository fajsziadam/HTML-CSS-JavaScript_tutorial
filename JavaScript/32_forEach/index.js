// forEach() = method used to iterate over the elements 
//                     of an array and apply a specified function (callback)
//                     to each element

//                     array.forEach(callback)
//                     element, index, array are provided

/*
let numbers = [1, 2, 3, 4, 5];

//numbers.forEach(display);
//numbers.forEach(double);
//numbers.forEach(display);
//numbers.forEach(triple);
//numbers.forEach(display);
//numbers.forEach(square);
//numbers.forEach(display);
numbers.forEach(cube);
numbers.forEach(display);



function display(element){
    console.log(element)
}

function double(element,index,array){
    array[index] = element * 2;
}

function triple(element,index,array){
    array[index] = element * 3;
}

function square(element,index,array){
//    array[index] = element * element;
    array[index] = Math.pow(element, 2)
}

function cube(element,index,array){
    //    array[index] = element * element * element;
        array[index] = Math.pow(element, 3)
    }
*/


let fruits = ["aPPle", "BAnana", "kiWi", "ORangE"];

fruits.forEach(display);
fruits.forEach(upperCase);
fruits.forEach(display);
fruits.forEach(lowerCase);
fruits.forEach(display);
fruits.forEach(capitalize);
fruits.forEach(display);

function display(element){
    console.log(element);
}

function upperCase(element,index,array){
    array[index] = element.toUpperCase();
}

function lowerCase(element,index,array){
    array[index] = element.toLowerCase();
}

function capitalize(element,index,array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}