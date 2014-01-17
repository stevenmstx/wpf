// JavaScript Document
var cal = [365, 52, 12];
var pay = prompt("How much do you make a week?");
var payChecks = 26;

var year = cal[1] * pay;
var perCheck = year / payChecks;
var day = year / cal[0];
var month = year / cal[2];

var total = "You make " + year + " a year, " + month + " per month, " + day + " per day, and " + perCheck + " per Pay Check.";
alert(total);