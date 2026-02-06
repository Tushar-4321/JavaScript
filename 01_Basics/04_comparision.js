//console.log(2>1); output in boolean ==> true

// console.log("2">1);
// console.log("02">1);// here js automatically converted the "2" in number
 
// console.log(null>0); // ==> false  as null is empty
// console.log(null == 0); // ==> false
// console.log(null >= 0); // ==> true
// console.log(null <= 0); // ==> true
// console.log(null < 0); // ==> false

/* The reason is that an equality check == and comparisons < > >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why(3) null >= 0 is true and (1) null > 0 is false. */

// console.log(undefined == 0);
// console.log(undefined < 0);
// console.log(undefined > 0);
// console.log(undefined >= 0);  all these undefined are false

// Strict check ==> "===" this not only checks it's value but also it's datatype

console.log("2" === 2); // ==> false


