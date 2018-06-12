/*The Random Number Guessing Game
 * Generates a number between 1 and 6
 * and gives the player two attempts to guess the number*/

var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt("I'm think of a number between 1 and 6. What is it?");

//Checks the user input to see if it is equal the random number
if (parseInt(guess) === randomNumber) {
    correctGuess = true;
}
//Checks the user input to see if it is less than the random number
else if (parseInt(guess) < randomNumber) {
    var guessAgain = prompt("Your choice of " + guess + ", was lower than the random number. Try again!");
    if (parseInt(guess) === randomNumber) {
        correctGuess = true;
    }
}
//Checks the user input to see if it is greater than the random number
else if (parseInt(guess) > randomNumber) {
    var guessAgain = prompt("Your choice of " + guess + ", was greater than the random number.Try again!");
    if (parseInt(guess) === randomNumber) {
        correctGuess = true;
    }
}

//Checks if the user had guessed the right number at the end or not
if (correctGuess) {
    document.write("<p>You guessed the number!</p>");
}
else {
    document.write("<p>Sorry. The number was " + randomNumber + ".</p>");
}