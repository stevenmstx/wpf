// Steven Spencer Jan. 23, 2014 - Conditionals
// This is to calculate how much should be billed to a client for work done during regular hours and overtime hours.
var client = prompt("Please enter client's name."); //Prompts user for Client's name.
var rhours = prompt("How many hours did you work during Regular Business time?"); //Prompts user for number of regular hours worked.
var ohours = prompt("Hom many hours did you work outside Regular Business time?"); //Prompts user for number of overtime hours worked.
var rate = 115; //Hourly rate in US Dollars.

if(client == ""){ //Checks to see if client's name is empty.
    console.log("Client's name is required!"); //Output if client's name is empty.
}else if (rhours != "" && ohours != ""){ //Calculates if both regular hours and overtime hours are entered.
    rhours = rhours * rate; //Calculation for total cost of regular hours.
    ohours = ohours * (rate * 1.5); //Calculation for total cost of overtime hours.
    var result = rhours + ohours; //Calculation for regular and overtime hours together.
    var cost = client + " owes you $" + result; //Variable to store output result.
    console.log(cost);
    alert(cost);
}else if (rhours != "" && ohours == ""){ //Calculates if only regular hours are entered.
    rhours = rhours * rate; //Calculation for total cost of regular hours.
    var cost = client + " owes you $" + rhours; //Variable to store output result.
    console.log(cost);
    alert(cost);
}else if (rhours == "" && ohours != ""){ //Calculates if only overtime hours are entered.
    ohours = ohours * (rate * 1.5); //Calculation for total cost of overtime hours.
    var cost = client + " owes you $" + ohours; //Variable to store output result.
    console.log(cost);
    alert(cost);
}else{ //If no amounts are given, then this is outputted.
    console.log("You aren't getting paid!");
    alert("You aren't getting paid!");
}