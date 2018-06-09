//<h2>There once was a [adjective] slug who wanted to climb up a tree to [eat] the [noun].</h2>

var numberOfQuestions = 3;

var adjective = prompt(questionsLeft(1) + "\nGive me an adjective");

var part1 = "There once was a " + adjective;
var verb = prompt(questionsLeft(1) + "\nGive me a verb");

var part2 = "slug who wanted to climb up a tree to " + verb;
var noun = prompt(questionsLeft(1) + "\nGive me a noun");

var part3 = "the " + noun;
alert(questionsLeft(0) + "\nYou're finished!");
var sentence = part1 + " " + part2 + " " + part3;
document.write(sentence);

function questionsLeft(reduceby) { 
    var messageToReturn = "There are " + numberOfQuestions + " questions left!";
    numberOfQuestions -= reduceby;
    return messageToReturn;
}