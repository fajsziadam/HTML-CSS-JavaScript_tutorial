// .toLocaleString() = returns a string with a language 
//                                  sensitive representation of a number
//                                  .toLocaleString("locale", {options});

let number = 123465.789;

/*
number = number.toLocaleString("hu-HU");
console.log("HU: " + number);

number = number.toLocaleString("de-DE");
console.log("DE: " + number);

number = number.toLocaleString("en-US");
console.log("US: " + number);
*/

//number = number.toLocaleString("en-US",{style: "currency", currency: "USD"});
//number = number.toLocaleString("hi-IN",{style: "currency", currency: "INR"});
//number = number.toLocaleString("de-DE",{style: "currency", currency: "EUR"});
number = number.toLocaleString("hu-HU",{style: "currency", currency: "HUF"});


console.log(number)