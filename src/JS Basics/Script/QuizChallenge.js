var quiz = [
    ["What is Darth Vader's Real Name?", "anakin skywalker"],
    ["What was the color of Luke Skywalker's First Lightsaber?", "blue"],
    ["Who gave Luke Skywalker his first Lightsaber?", "obi wan kenobi"]
];

var correctAnswers = [];

var incorrectAnswers = [];

var numOfQuestions = quiz.length;
var question;
var answer;
var userAnswer;
var numCorrect = 0;
var numIncorrect = 0;
var html;

function print(message) {
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = message;
}

function printResults(correct, incorrect) {
    var listHTML = '<h3>You got ' + numCorrect + ' questions correct!</h3>'
    listHTML += '<ol>';
    for (var i = 0; i < correct.length; i += 1) {
        listHTML += '<li>' + correct[i] + '</li>';
    }
    listHTML += '</ol>';
    listHTML += '<h3>You got ' + numIncorrect + ' questions incorrect!</h3> '
    listHTML += '<ol>';
    for (var i = 0; i < incorrect.length; i += 1) {
        listHTML += '<li>' + incorrect[i] + '</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
}

for (var i = 0; i < quiz.length; i += 1) { //Loops through each question in the array
    question = quiz[i][0];
    answer = quiz[i][1];
    userAnswer = prompt(question);
    if (userAnswer.toLowerCase() === quiz[i][1]) { //Compares user input against the answer in the array
        correctAnswers.push(question);
        numCorrect += 1;
    }
    else {
        incorrectAnswers.push(question);
        numIncorrect += 1;
    }
}

printResults(correctAnswers, incorrectAnswers);