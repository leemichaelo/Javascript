//Initialize Variables
var guessThis = randomNumber(6);
var guessAttempts = 0;
var computerGuess = 0;
var userGuess = " ";
var userAttempts = 0;

//Define functions
function randomNumber(upper) {
    return Math.floor(Math.random() * upper) + 1;
}

//Runs the while loop for computer guesses
while (computerGuess !== guessThis) {
    computerGuess = randomNumber(6);
    guessAttempts += 1;
}

//Runs the do while loop for the user guesses
do {
    userAttempts += 1;
    userGuess = prompt("Guess a number between 1 and 6, lets see if " +
        " you can guess the right number before the computer can!");
    if (parseInt(userGuess) !== guessThis) {
        alert(userGuess + " is not the right number! Try again.")
    }
}
while (parseInt(userGuess) !== guessThis);

//Prints the results
document.write("The random number was: " + guessThis);
document.writeln("<br><br>It took the you " + userAttempts +
    " guesses to get the correct answer.");
document.writeln("<br><br>It took the computer " + guessAttempts +
    " guesses to get the correct answer.");