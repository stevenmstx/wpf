// Steven Spencer Jan. 23, 2014 - Conditionals
// How to find out how much coffee is required to make someone hyper-active, based on age.
var name = prompt("What is the person's, drinking the coffee, name?"); //Prompts user for person's name.
if (name == ""){ //Checks to see if name is empty.
    console.log("I need a name!"); //Output in case name is empty.
}else{ //if name is not empty proceed with calculations.
    var age = prompt("How old is " + name + "?"); //Ask user for the person's age.
    if (age == ""){ //Checks to see if age is empty.
        console.log("Enter the age of the person."); //Output in case age is empty.
    }
    if (age >= 21 && age <= 40){ //Checks to see if person's age is between 21 and 40 years old.
        console.log(name + " requires 3 cups of coffee to get wired!");
    }
    if (age >= 41){ //Checks to see if person's age is older than 40 years old.
        console.log(name + " requires 4 cups of coffee to get wired!");
    }
    if (age <= 20 && age >= 10){ //Checks to see if person's age is between 10 and 20 years old.
        console.log(name + " requires 2 cups of coffee to get wired!");
    }
    if (age <= 9 && age != ""){ //Checks to see if person's age is younger than 10 years old.
        console.log(name + " requires 0 cups of coffee to get wired!");
    }
}