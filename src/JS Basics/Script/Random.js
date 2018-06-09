//Random Numbers
var inputMin = prompt("Lets Roll Some Numbers! Go ahead and enter the Min Number:");
var minNumber = parseInt(inputMin);

var inputMax = prompt("Great! Now enter the max number:")
var maxNumber = parseInt(inputMax);

var numberRoll = (Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber);

document.write(numberRoll + " is a random number between " + minNumber + " and " + maxNumber);