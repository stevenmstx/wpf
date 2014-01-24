// Steven Spencer Jan. 23, 2014 - Conditionals
//How much rice and water is needed to make steamed rice for a certain amount of people. The steamer is limited to a maximum serving of 20 people.
var people = prompt("How many people will be dinning this evening?");
var eating = prompt("How many of them will be eating rice?");
var cook = 0;
var rice = 2;
var maximum = 20;

if (people == "" && eating == "") {
    console.log("A value is required!");
}else if(eating <= maximum){
    (eating > people) ? console.log("Imaginary friends do not count. Must be less than People dinning.") : cook = 1;
    
    if (cook === 1){
        rice = eating / 2 * rice;
        var water = rice / 2;
        var result = "You need " + rice + " cups of rice, and " + water + " cups of water."
    }
    console.log(result);
    alert(result);
}else{
    (eating > people) ? console.log("Imaginary friends do not count. Must be less than People dinning.") : console.log("Too many mouths to feed!");
}
