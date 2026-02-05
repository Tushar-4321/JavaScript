//let score = "33abc"// becomes string because of ""
//let score = null
/*
let score = true
console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);

console.log(valueInNumber);// becomes NaN for 33abc and becomes 0 for null, and becomes 1 for boolean
*/

//"33" => 33
//"33abc" => NaN
//true => 1; false => 0
 
//let iSLoggedIn = 1  ==>true
//let iSLoggedIn = ""  ==> false 
let iSLoggedIn = "Tushar"  // ==> true

let booleanIsLoggedIn = Boolean(iSLoggedIn)

console.log(booleanIsLoggedIn);

//node 01_Basics/03_conversionOperations.js

let someNumber = 33

let stringNumber = String(someNumber)

console.log(stringNumber);

console.log(typeof (stringNumber));

