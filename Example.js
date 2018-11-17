const READLINE = require("readline-sync");
let wantsToDrink = READLINE.question("You're at a part and someone offers you a drank. Enter Y/N");

if(wantsToDrink == 'y'{
	let age = READLINE.question("Please enter your age")
	if(age >= 21) {
	console.log("Congrats! You can drink alchohol!");
}
else{
	console.log("Sorry. It's illegal for you to drink");
}
}
else{
	console.log("Have some water! You're so responsible");
}