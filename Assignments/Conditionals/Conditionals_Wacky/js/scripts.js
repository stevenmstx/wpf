// Steven Spencer Jan. 23, 2014 - Conditionals
// How to find out how much coffee is required to make someone hyper-active, based on age.
var name = prompt("What is the person's, drinking the coffee, name?");
if (name == ""){
    console.log("I need a name!");
}else{
    var age = prompt("How old is " + name + "?");
    if (age == ""){
        console.log("Enter the age of the person.");
    }
    if (age >= 21 && age <= 40){
        console.log(name + " requires 3 cups of coffee to get wired!");
    }
    if (age >= 41){
        console.log(name + " requires 4 cups of coffee to get wired!");
    }
    if (age <= 20 && age >= 10){
        console.log(name + " requires 2 cups of coffee to get wired!");
    }
    if (age <= 9 && age != ""){
        console.log(name + " requires 0 cups of coffee to get wired!");
    }
}