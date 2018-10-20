// import readline-sync module, don't touch!
const READLINE = require("readline-sync");

// fill in object below with all relevant properties (see instructions)


// write code below that simulates the change machine in action!
let changeMachine = {
	inputCents: undefined,
	quartCnt: undefined,
	dimesCnt: undefined,
	nickelsCnt: undefined,
	penniesCnt: undefined,
	goodbye: "Goodbye Human",
	greetng: "Welcome Human"
};

changeMachine.inputCents = READLINE.question("Welcome Human. Please input positive cent value:  ");

changeMachine.quartCnt = Math.floor(changeMachine.inputCents / 25);
let q = changeMachine.inputCents % 25;


changeMachine.dimesCnt = Math.floor(q / 10);
let q2 = q % 10;

changeMachine.nickelsCnt = Math.floor(q2 / 5);

changeMachine.penniesCnt = q2 % 5;

console.log(`
quarters = ${changeMachine.quartCnt} 
dimes = ${changeMachine.dimesCnt}
nickels =  ${changeMachine.nickelsCnt} 
pennies = ${changeMachine.penniesCnt} 
${changeMachine.goodbye}`);




