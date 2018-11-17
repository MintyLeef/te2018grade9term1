const READLINE = require("readline-sync");
let player;


//START
console.log("*** WELCOME TO THE DUNGEON ***");
let startscreen = READLINE.question("START/EXIT:");
if(startscreen == "START") {
  console.log("Starting Game...")
}
 else{
      startscreen == "EXIT"
          console.log("Come Back Again!")
        }

if (startscreen == "START") {



//CLASS SELECTION
console.log("Choose Your Class: MAGE__SWORDSMAN__ARCHER")
 role = READLINE.question("What is your class?:");
 

//MAGE ROUTE
if(role == "MAGE"){
  console.log(
  "Name = Arlen",
  "Courage(CRG) = 10",
  "Intellect(INT) = 17",
  "Strength(STR) = 3",
  "Magic(MAG) = 18.5",
  "Weapon = Magic Staff"
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
if(role == "MAGE"){
  console.log("Arlen is a powerful wizard's apprentice. He is tasked with retrieving a rare gemstone capable of powering the Hamlet, from the dungeon");

}

//SWORDSMAN ROUTE
if(role == "SWORDSMAN") {
console.log("Name = Anton",
  "| Courage(CRG) = 18 |",
  "| Intellect(INT) = 13 |",
  "| Strength(STR) = 19 |",
  "| Magic(MAG) = 0 |",
  "| Weapon = Sword and Shield |")
}

if (role == "SWORDSMAN") {
  name: "Anton",
  courage = 18,
  intellect = 13  ,
  strength = 19,
  magic =  0,
  weapon = "Sword and Shield"
};

if (role == "SWORDSMAN") {
  console.log("Anton is an orphaned child who was adopted by a farming family. His adopted parents told tales of his adventurous father and mother. He seeks to make a name for himself in the dungeon.")
}

//DUNGEON ENTER

let enterDungeon = READLINE.question("Will you enter dungeon? (yes or no) ");
if(enterHouse == "yes") {
  console.log(`You prepare your ${player.weapon} and enter the maw of the dungeon...`);

} 
else {
  player.intellect++;
  console.log(`You coward. Return when you've grown. Pathetic`);

}
console.log("Thanks for playing!");
}
