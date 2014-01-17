// JavaScript Document
var weight = prompt("How much do you weigh in pounds?");
var height = prompt("How heigh are you in inches?");

if (weight > 180) {
	var result1 = "You are not small...";
}
else {
	var result1 = "You are tiny...";
}

if (height > 72) {
	var result2 = "and tall!!!";
}
else {
	var result2 = "and short...";
}

var you = result1 + result2;
alert(you);