// Primitive

//  7types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId)

const bigNumber = 234543234543454343n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["vinay", "vicky", "vinod"];
let muObj = {
    name: "vinay",
    age: 23
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber)

