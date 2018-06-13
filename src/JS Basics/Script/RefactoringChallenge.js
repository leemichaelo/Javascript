var html = '';

function randomRGB() {
    return Math.floor(Math.random() * 256);
}

function randomColor() {
    var red = randomRGB();
    var green = randomRGB();
    var blue = randomRGB();
    return 'rgb(' + red + ',' + green + ',' + blue + ')'; 
     
}

function buildColorDiv() {
    return html += '<div style="background-color:' + randomColor() + '"></div>';
}

function printMessage(message) {
    document.write(message);
}

var numOfColors = prompt("Enter how many colors you want to see!");
for (var i = 0; i < numOfColors; i += 1) {
    buildColorDiv();
}

printMessage(html);