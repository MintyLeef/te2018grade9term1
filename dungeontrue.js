const READLINE = require("readline-sync");
let player;
let attackWolf;
let fleeWolf;
let doorHand;
let finalDrake;
let attackDrake;
let smartMove;
let dumbMove;
let talkDrake;

//START
console.log("*** WELCOME TO THE DUNGEON ***");
let startscreen = READLINE.question("START/EXIT:");
if(startscreen == "START" || startscreen == "start") {
  console.log("Starting Game...")
}
 else{
      startscreen == "EXIT"
          console.log("Come Back Again!")
        }

if (startscreen == "START" || startscreen == "start") {



//CLASS SELECTION
console.log("Choose Your Class: MAGE__SWORDSMAN")
 role = READLINE.question("What is your class?:");
 

//MAGE ROUTE
if(role == "MAGE" || role == "mage"){
  console.log(
  "| Name = Arlen |",
  " Courage(CRG) = 10 |",
  " Intellect(INT) = 17 |",
  " Strength(STR) = 3 |",
  " Magic(MAG) = 18.5 |",
  " Weapon = Magic Staff |"
  )
}

if (role == "MAGE" || role == "mage") {
  player = {
  name: "Arlen",
  courage:10,
  intellect:17,
  strength: 3,
  magic: 18.5,
  weapon: "Magic Staff"
}
};
if(role == "MAGE" || role == "mage"){
  console.log("Arlen is a powerful wizard's apprentice. He is tasked with retrieving a rare gemstone capable of powering the Hamlet, from the dungeon");

}

//SWORDSMAN ROUTE
if(role == "SWORDSMAN" || role == "swordsman") {
console.log("| Name = Anton |",
  " Courage(CRG) = 18 |",
  " Intellect(INT) = 13 |",
  " Strength(STR) = 19 |",
  " Magic(MAG) = 0 |",
  " Weapon = Sword and Shield |")
}

if (role == "SWORDSMAN" || role == "swordsman") {
  player = {
  name: "Anton",
  courage: 18,
  intellect: 13  ,
  strength: 19,
  magic: 0,
  weapon:"Sword and Shield"
};
}

if (role == "SWORDSMAN"|| role == "swordsman") {
  console.log("Anton is an orphaned child who was adopted by a farming family. His adopted parents told tales of his adventurous father and mother. He seeks to make a name for himself in the dungeon by slaying the famed drake.");
}

//DUNGEON ENTER

let enterDungeon = READLINE.question("Will you enter dungeon? (yes or no): ");
if(enterDungeon == "yes") {
  console.log(`You prepare your mind and enter the maw of the dungeon...`);
} 

else {
  console.log(`You coward. Return when you've grown. Pathetic`);
}
//DUNGEON START MAGE
if (role == "MAGE" || role == "mage") {
  console.log("After a few minutes of walking in the dark and eery dungeon a wolf appears")
 attackWolf = READLINE.question("What will you do? (Fight, Talk, Flee):");
}

if (attackWolf == "Fight") {
  console.log("You charge your magic staff and hit the wolf directly between the eyes, singing its fur. Startled but determined, you walk on.");
  player.courage += 2
}


if (attackWolf == "Talk") {
  console.log("It's no use. The beast cannot understand your words. The wolf charges at you and bites your leg.");
fleeWolf = READLINE.question("What will you do? (Flee):");
}

if (fleeWolf == "Flee"){
    console.log("You run for your life, the wolf soon losing track of you.");
     player.courage -= 2;
    console.log("SYSTEM: YOU LOSE 2 CRG. YOU NOW HAVE 8 CRG");
    console.log(`${player.courage}`)
  }

//MAGIC DOOR(MAGE)
if (role == "MAGE" || role == "mage") {
  console.log("You come upon a door with a faint glow coming from the other side. This must be the GEM ROOM! There are 2 hand shaped spots on the door.");
  doorHand = READLINE.question("Do you place your hands? (yes or no):");
}
if (doorHand == "yes" && player.courage < 9){
  console.log("SYSTEM: YOU CANNOT OPEN THE DOOR. YOU DO NOT HAVE ENOUGH COURAGE. REQUIRED: 9 CRG ");
}


if (doorHand == "yes" && player.courage >= 9){
  console.log("The door starts to glow and it opens. A shiny gem sits on a pillar. You take the gem and thus complete your mission");
}

if (doorHand == "no"){
  console.log("The door is the only way to the gem. Comeback when you no longer fear the dungeon.")
}



//DUNGEON START SWORDSMAN
if (role == "SWORDSMAN" || role == "swordsman") {
  console.log("You smell burning in the air. It must be the DRAKE. You charge deeper into the cave and see the fearsome beast. ");
 attackDrake = READLINE.question("What will you do? (Fight, Talk, Flee):")
}
if (attackDrake == "Fight" || attackDrake == "fight"){
  console.log("You strike the DRAKE's foot and it screams in pain")
  finalDrake = READLINE.question("The DRAKE retaliates by sending a fireball towards you. What will you do? (Sword, Shield):")
}
if (finalDrake == "Sword" || finalDrake == "sword"){
  console.log("You run your sword through the fireball. You take damage,severely wounding your Arm")
  player.strength -= 9.5;
  console.log("SYSTEM: YOU LOSE 9.5 STR. YOU NOW HAVE 9.5 STR");
  console.log(`${player.strength}`);
dumbMove = READLINE.question("The Dragon rears back for another attack. What will you do? (Fight, Flee):")
}

if (dumbMove == "Fight" && player.strength < 10 || dumbMove == "fight" && player.strength < 10){
  console.log("You muster what strength you have to lift your blade but without your other arm you can't. The DRAKE rams you and kills you.")

}
if (dumbMove == "Flee" || dumbMove == "flee") {
  console.log("You run away like a coward");
}

if (finalDrake == "Shield" || finalDrake == "shield"){
  console.log("You stand in place, positioning your shield in front of you. The fireball slams against your shiled and deals 0 damage")
  player.intellect += 3;
  console.log("SYSTEM: YOU GAINED 3 INT. YOU NOW HAVE 16 STR");
  console.log(`${player.intellect}`);
  smartMove = READLINE.question("The Dragon rears back for another attack. What will you do? (Fight, Flee):")
}

if (smartMove == "Fight" || smartMove == "fight"){
  console.log("You run at the DRAKE and pierce through its heart, killing the creature once and for all. You return home with the horns of the DRAKE. The townspeople cheer your name.")
}
if (smartMove == "Flee" || smartMove == "flee") {
  console.log("You run away like a coward")
}

if (attackDrake == "Talk" || attackDrake == "talk"){
  console.log("You yell at the  beast and it snarls back");
  talkDrake = READLINE.question("What will you do? (Fight, Flee):");
}

if (attackDrake == "Flee" || attackDrake == "flee"){
  console.log("You run away like a coward");
  player.courage -= 5;
  console.log("SYSTEM: YOU LOSE 5 CRG. YOU NOW HAVE 13 CRG");
  console.log(`${player.courage}`);
}

console.log("Thanks for playing!");

}