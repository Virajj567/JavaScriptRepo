let score = "33"

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber);
console.log(valueInNumber);
// "33" => 33
// "33abc" => NaN
// true => 1; false => 0



let isLoggedIn = 256

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true , 0 =>false
// "" => false
// "viraj the great" => true

let somNumber = 33

let StringNumber = String(somNumber)
console.log(typeof StringNumber)


// ************************* Operation ***********


let value =3
let negValue = -value
console.log(negValue)

/*
console.log(2+2)
console.log(2-2)
console.log(2*2)
console.log(2**3)
console.log(2/3)
console.log(2%3)
*/

let str1 = "Viraj"
let str2 = " the Great"
console.log(str1+str2);

console.log("1" + 2)
console.log(1+"2")
console.log("1"+2+3)  //123
console.log(1+2+"2")  //32

console.log(+true);
console.log(+"");



let num1,num2,num3;

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter);