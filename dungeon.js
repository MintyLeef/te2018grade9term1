const READLINE = require("readline-sync");
let player;


//START
console.log("*** WELCOME TO THE DUNGEON***");
let startscreen = READLINE.question("START/EXIT:");
if(startscreen == "START") {
  console.log("Starting Game...")
}
 else{
      startscreen == "EXIT"
          console.log("Sorry but you cannot leave. Starting Game...")
        }


//CLASS SELECTION
console.log("Choose Your Class: MAGE__SWORDSMAN__ARCHER")
 role = READLINE.question("What is your class?:");
 if(role == "MAGE"){
  console.log(
  "Name = Arlen",
  "courage = 10",
  "intellect = 17",
  "strength = 3",
  "magic = 18.5",
  "weapon = Magic Staff"
  )
}
if (role == "MAGE") {
  player = 
  name = "Arlen",
  courage = 7,
  intellect = 17,
  strength = 3,
  magic = 18.5,
  weapon = "Magic Staff"
};

if(role == "SWORDSMAN") {
  name: "Anton",
  courage = 18,
  intellect = 13  ,
  strength = 19,
  magic =  0,
  weapon = "Sword and Shield"

}
if(role == "MAGE"){
  console.log("Arlen is a powerful wizard's apprentice. He is tasked with retrieving a rare gemstone capable of powering the Hamlet, from the dungeon");
console.log("You step into the maw of the dungeon");
}
let enterHouse = READLINE.question("Will you enter the house? (yes or no) ");
if(enterHouse == "y" || enterHouse == "yes") {
  player.courage++;
  console.log(`${player.name} prepares their ${player.weapon} and opens the door...`);
  // continue the story

} else {
  player.intellect++;
  console.log(`${player.name} decides not to open the door. However...`);
  // continue the story

}
console.log("Thanks for playing!");
