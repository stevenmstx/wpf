// Steven Spencer Jan. 23, 2014 - Conditionals
//How much rice and water is needed to make steamed rice for a certain amount of people. The steamer is limited to a maximum serving of 20 people.
var people = prompt("How many people will be dinning this evening?");//This is how many people are eating total
var eating = prompt("How many of them will be eating rice?");//This is how many people are eating rice
var cook = 0;//This is a variable to determine true or false later.
var rice = 2;//This is the minimum number of cups needed.
var maximum = 20;//This is the maximum number of people the rice maker can make rice for.

if (people == "" && eating == "") { //Making sure the prompts are not empty.
    console.log("A value is required!"); //Output if prompts are empty.
}else if(eating <= maximum){ //Checks to make sure the math makes sense.
    (eating > people) ? console.log("Imaginary friends do not count. Must be less than People dinning.") : cook = 1; //Output if users entered more rice eaters than people dinning.
    
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