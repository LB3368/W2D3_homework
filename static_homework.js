/*=========Practice What You Learned===============
//Links to an external site.Static Methods and Properties
class Governor {

}*/

class Governor {
        static married () {
            return ("I have a spouse.");
        }

        static securityDetailNeeded = 'no';

        static age = 75;

}

        
    console.log(Governor.married())
    console.log(Governor.securityDetailNeeded)
    console.log(Governor.age)
    console.log("\n\nWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\n\n")

//There is only one Governor in the state, add static methods and properties you'd expect a Governor to have.
//log the properties and test the methods (don't instantiate)
//Links to an external site.Inheritance
//Your base 

/*class

Person{
    constructor(){

    }
}*/

class Person {
    constructor(yourName, yourAge, favoriteColor) {
        this.name = yourName;
        this.age = yourAge;
        this.color = favoriteColor;
        
    }

    dance () {
        console.log("Let's Boggie!")
    }

    drawing () {
        console.log("I love to draw!")
    }

    drive () {
        console.log("I drive a BMW!")
    }
    
}

class PostalWorker extends Person {
    mailDelivery () {
        console.log("I am your postal carrier.")
    }

    haveStamps () {
        console.log("I have stamps on my truck if you need them")
    }
}

class Chef extends Person {
    prepareMeal () {
        console.log("What would you like?")
    }

    freshIngredients () {
        console.log("I buy from the farmer's market.")
    }

}

const postalWorker1 = new PostalWorker("Josh", 18, "blue");
const postalWorker2 = new PostalWorker("Christina", 21, "orange");
const chef1 = new Chef("Corbin", 7, "red and black");
const chef2 = new Chef("Momma", 42, "pink");

console.log(postalWorker1);
console.log(postalWorker2);
console.log(chef1);
console.log(chef2);

console.log("\n\n\n============================\n\n");
postalWorker1.dance()
postalWorker1.drawing()
postalWorker1.drive()
postalWorker1.haveStamps()
postalWorker1.mailDelivery()

console.log("\n\nWWWWWWWWWWWWWWWWWWWWWWWWWWWW\n\n")

postalWorker2.drive()
postalWorker2.drawing()
postalWorker2.dance()
postalWorker2.mailDelivery()
postalWorker2.haveStamps()
console.log("\n\nWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\n\n")

chef1.dance()
chef1.drawing()
chef1.drive()
chef1.prepareMeal()
chef1.freshIngredients()

console.log("\n\nWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW\n\n")

chef2.dance()
chef2.drawing()
chef2.drive()
chef2.prepareMeal()
chef2.freshIngredients()




//Think of three properties all people share, set them with the constructor
//Think of three methods all people share


//Create a PostalWorker class that inherits from person, add some methods


//Create a Chef class that inherits from person, add some methods


//Create 2 PostalWorkers and 2 Chefs, log them and test all their methods