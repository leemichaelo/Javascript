//Initialize Variables
var guessThis = randomNumber(6);
var guessAttempts = 0;
var computerGuess = 0;

//Define functions
function randomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

//Runs the loop
while (computerGuess !== guessThis) {
    computerGuess = randomNumber(6);
    guessAttempts += 1;
}

//Prints the results
document.write("The random number was: " + guessThis);
document.writeln("<br><br>It took the computer " + guessAttempts +
    " guesses to get the correct answer.");