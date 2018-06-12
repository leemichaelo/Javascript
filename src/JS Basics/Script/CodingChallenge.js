//Five Questions
//Keep track of how many questions answered correctly
//Final Message of how many they got right
//Rank the player, 1-2 bronze, 3-4 silver, 5 gold, 0 is no crown

var numberRight = 0;
var questionOne = prompt("Maester Amon is blind in real life");
if (questionOne === "true") {
    alert("Correct!");
    numberRight += 1;
}
else {
    alert("That was incorrect...");
}

var questionTwo = prompt("Excalibur is forged in the iron throne");
if (questionTwo === "false") {
    alert("Correct!");
    numberRight += 1;
}
else {
    alert("That was incorrect...");
}

var questionThree = prompt("Queen Elizabeth II visited the set & sat on the iron throne");
if (questionThree === "false") {
    alert("Correct!");
    numberRight += 1;
}
else {
    alert("That was incorrect...");
}

var questionFour = prompt("Joffrey is modeled after roman emperor Caligula");
if (questionFour === "false") {
    alert("Correct!");
    numberRight += 1;
}
else {
    alert("That was incorrect...");
}

var questionFive = prompt("The dragons are named after dead characters");
if (questionFive === "true") {
    alert("Correct!");
    numberRight += 1;
}
else {
    alert("That was incorrect...");
}

if (numberRight >= 5) {
    document.write("You got " + numberRight + " answers correct! You've earned a Gold Crown!");
}
else if (numberRight >= 3) {
    document.write("You got " + numberRight + " answers correct! You've earned a Silver Crown!")
}
else if (numberRight >= 1) {
    document.write("You got " + numberRight + " answers correct! You've earned a Bronze Crown!")
}
else {
    document.write("You Didn't Get Any Questions Right, Better Luck Next Time!")
}