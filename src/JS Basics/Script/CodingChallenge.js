//Quiz begins with zero right
var numberRight = 0;

//Ask Questions
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

// output results
document.write("<p>You got " + numberRight + " out of 5 questions correct.<p>");

// output rank
if (numberRight >= 5) {
    document.write("<p><strong>You earned a gold crown!</strong></p>");
}
else if (numberRight >= 3) {
    document.write("<p><strong>You earned a silver crown.</strong></p>");
}
else if (numberRight >= 1) {
    document.write("<p><strong>You earned a bronze crown.</strong></p>");
}
else {
    document.write("<p><strong>No crown for you. You need to study.</strong></p>");
}