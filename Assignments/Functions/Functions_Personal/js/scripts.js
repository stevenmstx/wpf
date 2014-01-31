// Steven Spencer Jan. 30, 2014 - Functions
// Calcuate how many eggs I need to make breakfast

// Getting user input
var people = prompt("How many people are eating breakfast?");
var scram = prompt("How many of them want scrambled?");
var over = prompt("How many want over-easy?");

function breakfast(num,scrambled,overeasy) { // Declaring a new function with parameters
	var p = null; // Setting blank variables
	var s = null;
	var o = null;
	(num == "") ? console.log("Please enter a number") : p = num; // Terinary Statements
	(scrambled == "") ? console.log("Please enter a number") : s = scrambled;
	(overeasy == "") ? console.log("Please enter a number") : o = overeasy;
	var test = s + o;
	if (test > p) {
		console.log("No imaginary friends allowed...");
	}else{
		var eggs = parseInt(s,10) * 2 + parseInt(o,10); //Calculation
		console.log("You need " + eggs + " eggs to make breakfast.");
	}
}

breakfast(people,scram,over); // Calling function with arguments