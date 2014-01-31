// Steven Spencer Jan. 30, 2014 - Functions
// Calculate how many people it takes to screw in a lightbulb.

// Declaring variables for user input.
var height = prompt("How high, in feet, is the lightbulb?");
var light = prompt("Is the light switch on? Answer Yes or No.");

if (height == ""){ // Checks to make sure variables are not blank.
	console.log("Enter a value");
}else if (light == ""){
	console.log("Enter a value");
}else if (light != 'Yes' && light != 'No' && light != 'yes' && light != 'no'){ // Checks to make sure only a Yes or No is entered.
	console.log("Enter a Yes or a No only...");
}else{
	function lightBulb(height,lswitch){ //Function declared.
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
			var result = parseInt(people, 10) + 1; //Calculation
			console.log("It will take " + result + " people to screw in the light.");
		}else{
			var result = parseInt(people, 10); //Calculation
			console.log("It will take " + result + " people to screw in the light.");
		}
	}
	
	lightBulb(height,light); //Function called.
}
	