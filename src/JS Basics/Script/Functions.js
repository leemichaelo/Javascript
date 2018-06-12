function getRandomNumber(upper, lower) {
    if (isNaN(upper) || isNaN(lower)) {
        throw new Error("You must use numbers only!");
    }
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

function getArea(width, length, unit) {
    var area = width * length;
    return area + " " + unit;
}

document.write(getRandomNumber(9, 5));


/*function expression
var alertRandom = function () {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    alert(randomNumber);
};*/