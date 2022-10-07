// object orient programming = oop
// So we dont' change the data type of the variable
// const ar = [
// const obj = ()
// shortcut for console.log = type clg + tab


const adventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"]
}

//how to access Timothy
console.log(adventurer.name)

//how to access hitpoints
console.log(adventurer.hitpoints)

// Print out "My name is Timothy. I have 99 Tums in my adventurers bag." using string interpolation. 
//Access a specific item in belongings array

console.log(`My name is ${adventurer.name}. I have 99 ${adventurer.belongings[2]} in my adventurer's bag.`)

// Iterate over an array
for (let i=0; i < adventurer.belongings.length; i++) {
	console.log(adventurer.belongings[i]);
}

// ===== USE AN OBJECT WITHIN AN OBJECT =====
const newAdventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: {
		name: "Velma",
		type: "Bat"
	}
}

// Access companion obj

console.log(newAdventurer.companion)

// Access name and type
console.log(newAdventurer.companion.name + " is a " + newAdventurer.companion.type)

// Access the companion's name:
console.log(newAdventurer.companion.name)


// ==== USE AN OBJECT WITHIN AN OBJECT WITHIN AN OBJECT

const newAdventurer2 = {
    name: "Timothy",
    hitpoints: 10,
    belongings: ['sword', 'potion', 'Tums'],
    companion: {
        name: "Velma",
        type: "Bat",
        companion: {
            name: "Tim",
            type: "Parasite"
        }
    }
}
// Access Tim's type
console.log(newAdventurer2.companion.companion.type)

//Let's add an array of belongings to Tim:

const adventurer2 = {
	name: 'Timothy',
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
	companion: {
		name: "Velma",
		type: "Bat",
		companion: {
			name: "Tim",
			type: "Parasite",
			belongings: ["SCUBA tank", "Rogan josh", "health insurance"]
		}  
	}
}
// Access health Insurance

// the "." = dot notation. and is used to access different fields in an object
console.log(adventurer2.companion.companion.belongings[2])

// ===== ARRAY OF OBJECTS =======
// An array of objects can look like this:
const movies = [ 
    { title: "Tokyo Story" }, 
    { title: "Paul Blart: Mall Cop"}, 
    { title: "L'Avventura"}
]

// Access the title L'Avventura
console.log(movies[2].title)

// iterate over the movies array printing all of titles
for (let i=0; i < movies.length; i++) {
	console.log(movies[i].title);
}

// ==== COMBINE OBJECTS, ARRAYS AND FUNCTIONS =====

const foo = {
    someObject: {
        someProperty: 'Oh, hai!'
}
}

console.log(foo.someObject.someProperty)
// writing a method inside an object
// we call functions inside objects methods
// if we write a method using an arrow function, we lose access to 'this' keyword (search MDN for 'this')
// avoid arrow functions in situations like below: (because 'this' will not bind to function.

const bar = {
    name: 'Teo',
    someMethod: function () {
        console.log(`Oh, goodbye! ${this.name}!`) //remember to use back tick and not single quote
    }
}

bar.someMethod()

// =============================================================
//      OBJECTS and ARRAYS
// =============================================================

// Can we write an object using "let" and "var"
// We used const primarily yesterday?
// Why should we write our objects with const?  
// So that we don't reassign our object completely - or accidentally overwrite it
// const arr = []
// const obj = {}

// commenting this out because there is one lower down
const adventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"]
}

// Access Timothy and show on the screen
console.log(adventurer.name)

// Access hitpoints and show on screen
console.log(adventurer.hitpoints)

// Print out "My name is Timothy.  I have 99 Tums in my adventurer's bag."
// using string interpolation
console.log(`My name is ${adventurer.name}. I have 99 ${adventurer.belongings[2]} in my adventurer's bag.`)
// the other way to do this would be using concatenation
// uncomment to see that they are the same
// console.log("My name is " + adventurer.name + ". I have 99 " + adventurer.belongings[2] +" in my adventurer's bag.")

// Iterate over an array
// we are going to iterate over the length of the array so that we can see each of the
// belongings in the array
for (let i=0; i<adventurer.belongings.length; i++) {
    console.log(adventurer.belongings[i])
}


// ======= USE AN OBJECT WITHIN AN OBJECT ===========
// Using an object WITHIN an object

const newAdventurer = {
	name: "Timothy",
	hitpoints: 10,
	belongings: ["sword", "potion", "Tums"],
    companion: {
        name: "Velma",
        type: "Bat",
        companion: {
            name: "Tim",
            type: "Parasite",
            belongings: ["SCUBA tank", "rogan josh", "health insurance"]
        }
    }
}

// Access the entire companion object
console.log(newAdventurer.companion)

// Access the name and the type seperately
console.log(newAdventurer.companion.name + " is a " + newAdventurer.companion.type)

// Access Tim's type
console.log(newAdventurer.companion.companion.type)

//  now we want an OBJECT in an OBJECT in an OBJECT
console.log(newAdventurer.companion.companion.belongings[2])



// ========== ARRAY OF OBJECTS ========== 
// these are anonymous objects becaus there is no name for each object
// but they can be accessed by using array indices
// notice that they are all formatted the same
const movies = [
    {title: "Tokyo Story"},
    {title: "Paul Blart: Mall Cop"},
    {title: "L'Avventura"}
]

// access the title L'Aventura
console.log(movies[2].title)

// iterate over the movies array printing all the titles
for(let i=0; i < movies.length; i++) {
    console.log(movies[i].title)    
}

// ========== COMBINE OBJECTS, ARRAY, AND FUNCTIONS ========== 
const foo = {
    someObject: {
        someProperty: 'Oh, hai!'
    }
}
console.log(foo.someObject.someProperty)

// Writing a method inside an object
// We call functions inside object methods
const bar = {
    someMethod: () => {
        console.log('Oh, goodbye!', this)
    }
}

bar.someMethod()

// difference between bar and bar 2 is function declaration versus arrow function
const bar2 = {
    someMethod: function () {
        console.log('oh, goodbye!', this)
    }
}

bar2.someMethod()

