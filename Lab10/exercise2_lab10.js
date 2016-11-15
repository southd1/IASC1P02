var myPrompt = prompt("What is your age?");

var todayDate = new Date();
var year = todayDate.getFullYear();
document.getElementById("output").innerHTML = (year - myPrompt);
