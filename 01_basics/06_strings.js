const name = "viraj"
const repoCount =50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('viraj-j-j')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));


const newString = gameName.substring(0,4);
console.log(newString) // last index i.e. 4 is not included

const anotherString =gameName.slice(0,5)
console.log(anotherString);

const newStringOne = "   viraj    ";
console.log(newStringOne.trim());

const url = "https://viraj.com/viraj%20joshi"

console.log(url.replace('%20','-'));

console.log(url.includes("vir"));

console.log(gameName.split('-'))