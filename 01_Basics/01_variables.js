const accountId = 12345
let accountEmail = "anshtk123456789@gmail.com"
var accountPasssword = "12345"
accountCity = "Jaipur"// this is also allowed in JS but not a safe method
let accountState;// it shows undefined in output

//accountId = 5// This will not change the accountId because we used const keyword it means that it became constant, so it is not allowed

accountEmail = "tushar1@gmail.com" // change allowed for let
accountPasssword = "5671"
accountCity = "Mumbai"

console.log(accountId);
// console.log(accountEmail);
// console.log(accountPasssword);
// console.log(accountCity); // it is taking tooo much time to write this much so we use another method

console.table([accountId, accountEmail, accountPasssword, accountCity, accountState])

/* Prefer not to use var Because of issue in block scope and functional scope, it means that in initial days for example we use name variable so when another person came used same name variable for some other funtion but as result all other name variable values will also get changed 
like it will change variable name value used in starting
will also change all variable using same variable so it is better to use let whose value can be changed but cannot be redeclared
*/

