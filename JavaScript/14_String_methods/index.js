//STRINGS
// string methods = allow you to manipulate and work with text (strings)

let userName = "     Adama";

//.chartAt()
console.log(userName.charAt(6));

//.indexOf()
console.log(userName.indexOf("a"));

//.lastIndexOf
console.log(userName.lastIndexOf("a"));

//.length
console.log(userName.length);

//trim
console.log(userName.trim());

//.toUpperCase()
console.log(userName.toLocaleUpperCase());

//.toLowerCase()
console.log(userName.toLocaleLowerCase());

//.repeate()
console.log(userName.repeat(5));

//.startswith
console.log(userName.startsWith(" "));

//.endswith
console.log(userName.endsWith("m"));

//includes
console.log(userName.toLocaleLowerCase().includes("ada"));

let phoneNumber = "123-456-7890";

//.replaceAll
phoneNumber = phoneNumber.replaceAll("-", "/");
console.log(phoneNumber);

//.padStart(); padEnd();
phoneNumber = phoneNumber.padStart(20, "0")
console.log(phoneNumber);
