// import readline-sync module, don't touch!
const READLINE = require("readline-sync");
let inputCents = READLINE.question("Welcome Human. Please input positive cent value")
// fill in object below with all relevant properties (see instructions)


// write code below that simulates the change machine in action!
let changeMachine = {
	quarters: 'undefined',
	dimes: 'undefined',
	nickels: 'undefined',
	pennies: 'undefined'
};


quartCnt = Math.floor(inputCents / 25)
d = Math.floor(inputCents % 25)
dimesCnt = Math.floor(d/10)
n = Math.floor(d%10)
nicklesCnt = Math.floor(n/5)
p = Math.floor(n%5)

console.log(`${quartCnt}, ${d}, ${dimesCnt}, ${n}, ${nicklesCnt}, ${p}`);



