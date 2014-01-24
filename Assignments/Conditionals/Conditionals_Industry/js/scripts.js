// Steven Spencer Jan. 23, 2014 - Conditionals
// This is to calculate how much should be billed to a client for work done during regular hours and overtime hours.
var client = prompt("Please enter client's name."); //Prompts user for Client's name.
var rhours = prompt("How many hours did you work during Regular Business time?"); //Prompts user for number of regular hours worked.
var ohours = prompt("Hom many hours did you work outside Regular Business time?"); //Prompts user for number of overtime hours worked.
var rate = 115; //Hourly rate in US Dollars.

if(client == ""){
    console.log("Client's name is required!");
}else if (rhours != "" && ohours != ""){
    rhours = rhours * rate;
    ohours = ohours * (rate * 1.5);
    var result = rhours + ohours;
    var cost = client + " owes you $" + result;
    console.log(cost);
    alert(cost);
}else if (rhours != "" && ohours == ""){
    rhours = rhours * rate;
    var cost = client + " owes you $" + rhours;
    console.log(cost);
    alert(cost);
}else if (rhours == "" && ohours != ""){
    ohours = ohours * (rate * 1.5);
    var cost = client + " owes you $" + ohours;
    console.log(cost);
    alert(cost);
}else{
    console.log("You aren't getting paid!");
    alert("You aren't getting paid!");
}