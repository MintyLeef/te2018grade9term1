// import readline-sync module, don't touch!
const READLINE = require("readline-sync");

// Write your program below!
// First line should get user input (year) and store it in variable y.

//1
let y = READLINE.question("Type the year for Easter: ");
console.log(`y=${y}`);
//y = 2020;
//console.log(y)
//2
let a = Math.floor(y%19);

//3
let b = Math.floor(y/100);
let c = Math.floor(y%100);


//4
let d = Math.floor(b/4);
let e = Math.floor(b%4);

//5
let f = Math.floor((b + 8)/25);

//6
let g = Math.floor((b - f)/3);

//7
h = Math.floor((19 *a+b-d-g+15)/30);

//8
i = Math.floor(c/4);
k = Math.floor(c%4);

//9
r = Math.floor((32 + 2 * e + 2 * i - h - k)%7);

//10
m = Math.floor((a + 11 * h + 22 * r)/451);

//11
n = Math.floor((h + r - 7 * m + 114)/31);
p = Math.floor((h + r - 7 * m + 114)%31);

//Prints

console.log(`a=${a} b=${b} c=${c} d=${d} e=${e} f=${f} g=${g} h=${h} i=${i} k=${k} r=${r} m=${m} n=${n} p=${p}`)









