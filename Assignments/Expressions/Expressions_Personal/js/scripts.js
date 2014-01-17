// JavaScript Document
var days = prompt("How many days a week do you use daycare?");
var cost = prompt("How much does daycare cost per day?");
var weeks = 52;

var result = days * weeks * cost;

var total = "The yearly cost for daycare is: " + result;
alert(total);