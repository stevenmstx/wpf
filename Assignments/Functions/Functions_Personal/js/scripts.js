// Steven Spencer Jan. 30, 2014 - Functions
// Calcuate how many eggs I need to make breakfast

var people = prompt("How many people are eating breakfast?");
var scram = prompt("How many of them want scrambled?");
var over = prompt("How many want over-easy?");

function breakfast(num,scrambled,overeasy) {
	var p = null;
	var s = null;
	var o = null;
	(num == "") ? console.log("Please enter a number") : p = num;
	(scrambled == "") ? console.log("Please enter a number") : s = scrambled;
	(overeasy == "") ? console.log("Please enter a number") : o = overeasy;
	var test = s + o;
	if (test > p) {
		console.log("No imaginary friends allowed...");
	}else{
		var eggs = s * 2 + o;
		console.log("You need " + eggs + " to make breakfast.");
	}
}

breakfast(people,scram,over);