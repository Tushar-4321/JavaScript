const name = "tushar"
const repoCount = 20

// console.log(name + repoCount + " Kumar"); concatanate
// this method is not a good method so use backticks

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);
console.log(` Hello my name is ${name} and my repoCount is ${repoCount} `);

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("tushar-race")
console.log(gameName);
/*
String {'tusharrace'}
0: "t"
1: "u"
2: "s"
3: "h"
4: "a"
5: "r"
6: "r"
7: "a"
8: "c"
9: "e"
length: 10
[[Prototype]]: String
[[PrimitiveValue]]: "tushar-race" 
this output comes when the code is run in web browser inspect{write code, > enter(button), > gameName, > enter(button)}*/
// console.log(gameName[0]);
// console.log(gameName._proto_);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(3)); // => h
console.log(gameName.indexOf('r')); // => 5

//write every methods of strings on a note....? via inspect or on a note

const newString = gameName.substring(0,4) // 0, 4 means ==> gameName.substring(start, end) .... 0 -> start point and 4 -> end point but end string doesn't come 0, 1, 2, 3 will come only
console.log(newString);

const anotherString = gameName.slice(-9, 4) // piche se start karega
console.log(anotherString);

/* Chalo isko simple language me samajhte hain 👇

const anotherString = gameName.slice(-9, 4)
console.log(anotherString);
🔹 1. slice() kya karta hai?

slice(start, end) string ka ek part (substring) nikalta hai.

start → kis index se start kare

end → kis index tak (end index include nahi hota)

Negative index → piche se counting hoti hai

🔹 2. Negative index ka matlab?

Agar string hai:

let gameName = "TusharKumar";

Length = 12

Index numbering:

T  u  s  h  a  r  K  u  m  a  r
0  1  2  3  4  5  6  7  8  9 10 11

Negative indexing:

-12 -11 -10 -9 -8 -7 -6 -5 -4 -3 -2 -1
 T   u   s   h   a   r   K   u   m   a   r
🔹 3. Ab slice(-9, 4) ka kya hoga?
gameName.slice(-9, 4)

Step 1: -9 ka matlab =
Length 12 hai → 12 - 9 = 3

To start index = 3

Step 2: End index = 4

To actual ho gaya:

gameName.slice(3, 4)

Index 3 se 4 tak (4 include nahi hoga)

Index 3 = h

So output hoga:

"h"
🔹 Important Rule

Agar start index > end index, to result empty string aata hai.

Example:

"Tushar".slice(4,2)

Output:

""
🔹 Ek aur Simple Example
let name = "JavaScript";

let result = name.slice(-6, -1);
console.log(result);

Length = 10

Negative indexing:

J  a  v  a  S  c  r  i  p  t
0  1  2  3  4  5  6  7  8  9
-10 -9 -8 -7 -6 -5 -4 -3 -2 -1

-6 = 10 - 6 = 4

-1 = 10 - 1 = 9

So actual:

name.slice(4,9)

Index 4 se 8 tak:

S c r i p

Output:

"Scrip"
🔥 Short Summary

✔ slice(start, end) substring deta hai
✔ End index include nahi hota
✔ Negative index = piche se count
✔ Agar start > end → empty string */

/*🔹 Important Point

👉 JavaScript me har character count hota hai

Capital letter bhi 1

Small letter bhi 1

Space bhi 1

Special character bhi 1 */

const newStringOne = "   Tushar    "
console.log(newStringOne);
console.log(newStringOne.trim());// just print the output u will understand trim // it removes unneccessary space
const url = "https://tushar.com/tushar%20kumar"

console.log(url.replace('%20', '_'));

console.log(url.includes('rudra'));  // ==> false 

console.log(gameName.split('-')); // string split into 2 parts (converted into array based on -)

