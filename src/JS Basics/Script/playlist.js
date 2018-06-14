﻿var playList = [
    ["I Did It My Way", "Frank Sinatra"],
    ["Respect", "Aretha Franklin"],
    ["Imagine", "John Lennon"],
    ["Born to Run", "Bruce SPringsteen"],
    ["Louie Louie", "The Kingsmen"],
    ["Maybeleen", "Chuck Berry"],
];

function print(html) {
    document.write(html);
}

function printSongs(songs) {
    var listHTML = '<ol>';
    for (var i = 0; i < songs.length; i += 1) {
        listHTML += '<li>' + songs[i][0] + ", by " + songs[i][1] + '</li>';
    }
    listHTML += '</ol>';
    print(listHTML);
}

printSongs(playList);