// Steven Spencer Jan. 30, 2014 - Functions
// Calculate how many people it takes to screw in a lightbulb.

var height = prompt("How high, in feet, is the lightbulb?");
var light = prompt("Is the light switch on? Answer Yes or No.");

if (height == ""){
	console.log("Enter a value");
}else if (light == ""){
	console.log("Enter a value");
}else if (light != "Yes" || light != "yes" || light != "No" || light != "no"){
	console.log("Enter a Yes or a No only...");
}else{
	function lightBulb(height,lswitch){
		if (lswitch == "Yes" || lswitch == "yes"){
			lswitch = true;
		}else{
			lswitch = false;
		}
		if (height > 6){
			var people = 2;
		}else if(height < 6){
			var people = 1;
		}
		if (lswitch == true){
			var result = parseInt(people, 10) + 1;
			console.log("It will take " + result + " people to screw in the light.");
		}else{
			var result = parseInt(people, 10);
			console.log("It will take " + result + " people to screw in the light.");
		}
	}
}
	