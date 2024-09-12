//Date objects = Objects that contain values that represent dates and times
//               These date objects can be changed and formatted



const date1 = new Date();

               //Date(year, month, day, hour, minute, second, ms);
const date2 = new Date(2024, 8, 12, 18, 8, 20, 5);

//Date strings
const date3 = new Date("2024-08-12T18:08:30Z");

const date4 = new Date(0); //--> epic date --> 1970 01 01 01:00:00
const date5 = new Date(1700000000000);

console.log(date1);
console.log(date2);
console.log(date3);
console.log(date4);
console.log(date5);

const date = new Date();

const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const dayOfWeek = date.getDay();

console.log(`Year: ${year}`);
console.log(`Month: ${month}`);
console.log(`Day: ${day}`);
console.log(`Day of week: ${dayOfWeek}`);

const hour = date.getHours();
const minutes = date.getMinutes();
const second = date.getSeconds();

console.log(`Hour: ${hour}`);
console.log(`Minutes: ${minutes}`);
console.log(`Second: ${second}`);

date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(4);

console.log(date);

//Compare dates:
const date1_1 = new Date("2023-12-31");
const date1_2 = new Date("2024-01-01");

if(date1_2 > date1_1){
    console.log("HAPPY NEW YEAR!")
}
