// Steven Spencer Jan. 30, 2014 - Functions
// Calculate the number of pixels needed for a web page.

// Variables declared.
var columns = prompt("How many columns do you want to have?");
var main = prompt("How wide do you want the main content area?");

if (columns == ""){
	console.log("Enter a value.");
}else if (main == ""){
	console.log("Enter a value.");
}else{
	function calculate(col,size){
		if (col >= 4){
			console.log("Too many columns entered...");
		}else if (col < 4){
			var colwidth = parseInt(col,10) * 200; //Calculation
			var result = parseInt(colwidth,10) + parseInt(size,10);
			console.log("You need " + result + " pixels for your web page.");
		}
	}
}

calculate(columns,main); //Function called.