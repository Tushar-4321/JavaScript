const name = "tushar"
const repoCount = 20

// console.log(name + repoCount + " Kumar"); concatanate
// this method is not a good method so use backticks

console.log(`Hello my name is ${name} and my repo Count is ${repoCount}`);
console.log(` Hello my name is ${name} and my repoCount is ${repoCount} `);

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String("tusharrace")
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
[[PrimitiveValue]]: "tusharrace" 
this output comes when the code is run in web browser inspect{write code, > enter(button), > gameName, > enter(button)}*/
// console.log(gameName[0]);
// console.log(gameName._proto_);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(3)); // => h
console.log(gameName.indexOf('r')); // => 5

//write every methods of strings on a note....? via inspect or on a note

