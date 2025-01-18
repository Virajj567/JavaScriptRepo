// Stack (Primitive), heap (Non-Primitive)

let myName = "VirajTheGreat"

let anothername = myName
anothername="Viru"

console.log(anothername)
console.log(myName)


let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "viruuu@u.com"
console.log(userOne.email);
console.log(userTwo.email);