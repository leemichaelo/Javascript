//<h2>There once was a [adjective] slug who wanted to climb up a tree to [eat] the [noun].</h2>

var adjective = prompt("Give me an adjective");
var part1 = "There once was a " + adjective;
var verb = prompt("Give me a verb");
var part2 = "slug who wanted to climb up a tree to " + verb;
var noun = prompt("Give me a noun");
var part3 = "the " + noun;
alert("You're finished!");
var sentence = part1 + " " + part2 + " " + part3;
document.write(sentence);