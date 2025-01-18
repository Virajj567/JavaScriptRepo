console.log(2>1);

console.log("2">1);
console.log("02">1);

console.log(null>0)
console.log(null<0)
console.log(null==0)
console.log(null>=0)

console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)

// ===  strict checks

console.log("2" === 2);

// Refernce (non primitive)

// Array, Objects, Functions

const heros = ["shaktiman ", "naagraj", "doga"];

let myObj = {
    name: "viraj",
    age: 21,
}

const myFunction = function(){
    console.log("Hello world!");
}

console.log(typeof myFunction);

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId)

console.log(typeof anotherId)