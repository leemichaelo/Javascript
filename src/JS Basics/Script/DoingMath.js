var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var myAge = 29;

var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write("There are " + secondsPerDay + " seconds in a day");
var secondsAlive = secondsPerDay * daysPerWeek * weeksPerYear * myAge;
document.write("<br> I have been alive for more than " + secondsAlive + " seconds!");