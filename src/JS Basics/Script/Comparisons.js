var randomNumber = Math.floor(Math.random() * 6) + 1;
var guess = prompt("I'm think of a number between 1 and 6. What is it?");
if (parseInt(guess) === randomNumber) {
    document.write("<p>You guessed the number!</p>");
}
else {
    document.write("<p>Sorry. THe number was " + randomNumber + ".</p>");
}