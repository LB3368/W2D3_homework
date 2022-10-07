// ==============================
//           OOP CLASSES
// ==============================

// Four pillars of OOP: Encapsulation, Inheritance, Abstraction,Polymorphism
// freeCodeCamp: https://www.freecodecamp.org/news/four-pillars-of-object-oriented-programming/
// Encapsulation: https://www.sumologic.com/glossary/encapsulation/

const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
    const newEnemy = {
        name: nameIs,
        health: healthIs,
        power: powerIs,
        stamina: staminaIs
    }
    return newEnemy
}
const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
    const newPlayer = {
        name: nameIs,
        health: healthIs,
        power: powerIs,
        stamina: staminaIs
    }
    return newPlayer
}

// Create an enemy
const ivana = createEnemy('Ivana', 10000, 'Freeze Smile', 10000)
const anguel = createPlayer('Anguel', 20000, 'Super Punch', 20000)

// console.log(ivana)
// console.log(anguel)

// Creating a class
// When creating names for our classes, we use PascalCase casing
// Everything in JS follows camelCase

// Superclass or parent class
class Character {
    constructor(name, age, eyes, hair, lovesCats = true, lovesDogs) {
        this.legs = 2
        this.arms = 2
        this.name = name
        this.age = age
        this.eyes = eyes
        this.hair = hair
        this.lovesCats = lovesCats
        this.lovesDogs = lovesDogs || false
    }

    greet(otherCharacter) {
        console.log('hi ' + otherCharacter + '!')
    }

    classyGreeting(otherClassyCharacter) {
        console.log(`Greetings ${otherClassyCharacter.name}!`)
    }

    setHair(hairColor) {
        this.hair = hairColor
    }

    smite() {
        console.log('I smite thee you vile person')
    }
}

const mina = new Character()
const priyanka = new Character()
const cathy = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', false);
const stanley = new Character('Stanley the GOAT', 25, 'brown', 'green', false, false)

// console.log(mina)
// console.log(priyanka)
// console.log(cathy)

// mina.sayGreeting()
// priyanka.sayGreeting()

// mina.sayGoodbye()

// ===== ALTERING PROPERTIES OF AN INSTANCE =====
cathy.hair = 'supernova red'

// console.log('NEW CATHY BELOW')
// console.log(cathy)

// console.log('NEW PRIYANKA BELOW')
priyanka.setHair('black')

// console.log(priyanka)

// ===== USING AN OBJECT TO INTERACT WITH OTHER OBJECTS =====
// console.log(stanley)

// Make Cathy say hi to Stanley
// cathy.classyGreeting(stanley)

// Make Stanely say hi to Cathy
// stanley.classyGreeting(cathy)

// ===== IF WE WERE TO MAKE A SUPERHERO CLASS NOT BEING DRY =====
// DO NOT DO THIS!!!

// class SuperHero {
//     constructor(name, age, eyes, hair, lovesCats = true, lovesDogs) {
//         this.legs = 2
//         this.arms = 2
//         this.name = name
//         this.age = age
//         this.eyes = eyes
//         this.hair = hair
//         this.lovesCats = lovesCats
//         this.lovesDogs = lovesDogs || false
//         this.superpowers = 'Mega Punch'
//     }
    
//     greet(otherCharacter) {
//         console.log('hi ' + otherCharacter + '!')
//     }
    
//     classyGreeting(otherClassyCharacter) {
//         console.log(`Greetings ${otherClassyCharacter.name}!`)
//     }
    
//     setHair(hairColor) {
//         this.hair = hairColor
//     }
    
//     smite() {
//         console.log('I smite thee you vile person')
//     }
// }

// ===== INHERITANCE =====
// What we actually want to do to get the same functionality and use DRY principle

// Subclass or child class
class SuperHero extends Character {
    // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    // You will get this error above if you include a constructor method without including the super() that references back to the parent class
    constructor (name, age, eyes, hair) {
        super(name, age, eyes, hair)
        this.skills = [["thievery", "speed", "willpower"]]
    }

    fly() {
        console.log('Hey, I am flying...WOOO!')
    }

    // Method overriding: needs to be the exact same name of the method from the parent class
    greet(otherCharacter) {
        console.log(`Yo, ${otherCharacter}! My hair is ${this.hair}.`)
    }

    smite() {
        // We use the reserved keyword super to access our parent class
        super.smite()
        this.fly()
    }
}

const julia = new SuperHero('Julia', 25, 'brown', 'blonde')
// console.log(julia)

// julia.fly()
// console.log(julia.legs)

// Can we access fly() using an instance of the parent class?
// stanley is an instance of Parent class so we don't have access to the fly() that lives inside SuperHero class.
// stanley.fly()

// ===== POLYMORPHISM =====
// Method overriding is a run-time polymorphism. It helps to increase the readability of the program. It is used to grant the specific implementation of the method which is already provided by its parent class or superclass

// Without method overriding
// julia.greet('Marcus')

// method override
// julia.greet('Serjay')

// An example
/* 
class Animal
-> makeNoise() -> "RAWR"

class Dog extends Animal
-> makeNoise() -> 'Woof Woof!'

class Cat extends Animal
-> makeNoise() -> 'Meow!'
*/

// ==== CALLING THE PARENT CLASS FROM THE CHILD CLASS =====
julia.smite()

console.log(julia)

julia.greet('Marcus')

class SuperVillian extends Character {
    constructor(name, power, strengthLevel, nemesis) {
        super(name);
        this.power = power;
        this.strengthLevel = strengthLevel
        this.nemesis = nemesis;
        
    }
    fly() {
        console.log('Hey, I am flying...WOOO!')
    }

    greet(otherCharacter) {
        console.log(`Yo, ${otherCharacter}! I am your nemesis ${this.name}. I will smash you!`)
    }

    smite() {
        super.smite()
        this.fly()
        this.run()
        this.smash()
    }
}
    
const miguel = new SuperVillian('miguel', "super-speed", 100000, "julia")

console.log(miguel)


class SideKick extends Character {
    constructor(name, power, strengthLevel, hero = true) {
        super(name, power, strengthLevel, hero);
        this.name = name;
        this.power = power;
        this.strengthLevel = strengthLevel
        this.hero = hero || false;
        this.hero = hero;
        
    }
    fly() {
        console.log('Hey, I am flying...WOOO!')
    }

    greet(otherCharacter) {
        console.log(`Yo, ${otherCharacter}! Let's  ${this.fly}.`)
    }

    smite() {
        super.smite()
        this.fly()
        this.run()
        this.smash()
        this.laugh()
    }
}

const trevor = new SideKick

// console.log(trevor)
// console.log(julia.name)
miguel.greet(julia.name)