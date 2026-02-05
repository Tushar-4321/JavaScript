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

//console.log(booleanIsLoggedIn);

//node 01_Basics/03_conversionOperations.js

let someNumber = 33

let stringNumber = String(someNumber)

//console.log(stringNumber);

//console.log(typeof (stringNumber));

// *********************** OPERATIONS *************************//

let value = 3
let negValue = -value

//console.log(value);
//console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2**5);

let str1 = "Hello"

let str2 = " Tushar"

let str3 = str1 + str2
 console.log(str3);

// console.log("1"+ 2); // ==> 12
// console.log(1 + "2"); // ==> 12
// console.log("1" +2 +2);  // ==> 122
// console.log(1+2+"2"); // ==> 32
// string first hai to string ki tarah treat kiya jayega or vice versa 

//console.log(+true); ==> 1
// console.log(true+); ==> error

console.log(true); // ==> true
// console.log(+""); // better to not do it

let num1, num2, num3

num1 = num2 = num3 = 2+2
console.log(num1, num2, num3);


let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to conversion documentation ==> 
    // https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion








