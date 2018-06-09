//<h2>There once was a [adjective] slug who wanted to climb up a tree to [eat] the [noun].</h2>

var numberOfQuestions = 3;
var questionsLeft = "There are " + numberOfQuestions + " questions left!";

var adjective = prompt(questionsLeft + "\nGive me an adjective");
numberOfQuestions -= 1;
var questionsLeft = "There are " + numberOfQuestions + " questions left!";

var part1 = "There once was a " + adjective;
var verb = prompt(questionsLeft + "\nGive me a verb");
numberOfQuestions -= 1;
var questionsLeft = "There are " + numberOfQuestions + " questions left!";

var part2 = "slug who wanted to climb up a tree to " + verb;
var noun = prompt(questionsLeft + "\nGive me a noun");
numberOfQuestions -= 1;
var questionsLeft = "There are " + numberOfQuestions + " questions left!";

var part3 = "the " + noun;
alert(questionsLeft + "\nYou're finished!");
var sentence = part1 + " " + part2 + " " + part3;
document.write(sentence);