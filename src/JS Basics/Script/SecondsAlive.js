//Seconds Alive Work
var secondspermin = 60;
var minsperhour = 60;
var hoursperday = 24;
var daysperweek = 7;
var weeksperyear = 52;
var myage = 29;

var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
document.write("There are " + secondsPerDay + " seconds in a day");
var secondsAlive = secondsPerDay * daysPerWeek * weeksPerYear * myAge;
document.write("<br> I have been alive for more than " + secondsAlive + " seconds!");