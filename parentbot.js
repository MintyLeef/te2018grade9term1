const READLINE = require("readline-sync");



console.log("Welcome back")
let day = READLINE.question("Do you want to eat? (Gusto ma ba kumain?) You:")
if (day == "Yes" || day == "Opo") {
	console.log("That's Good. Sit at the table. (Mabuti yan. Upo ka na)")
}
else{
	console.log("It's okay if your not hungry. (Okay lang pag hindi ka pa gutom)")
}

let bath = READLINE.question("Go take a bath (Maligo ka na) You:")
if (bath == "Ok" || bath == "Opo") {
	console.log("Okay")
}
else {
	console.log("Ok. Take a bath later (Ok, maligo ka mamaya) ")
}

let hw = READLINE.question("Do your homework (Gawin mo na yong takdang aralin mo) You:")
if (hw == "Ok" || hw == "Opo") {
	console.log("Good. Do your best (Mabuti. Gawin mo kaya mo)")
}
else {
	console.log("Do your homework now (Gawin mo na yong takdang aralin mo ngayon)")
}

let finish = READLINE.question("Did you finish all your work (Natapos mo na ba ang takdang aralin mo?) You:")
if (finish == "Yes" || finish == "Opo") {
	console.log("You can relax now and go to sleep later (Sigi magpahinga ka na ngayon tapos ma tulog ka mamaya) " )
}
else {
	console.log("Finish your work. It's late. (Taposin mo yong takdang aralin mo. Huli na)")
}



