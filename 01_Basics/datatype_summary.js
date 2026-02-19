// in official documentation data is categorised in only two types 
// ===-> Primitive
// ===-> non - primitive
// means how data is stored and how we access data on this basis 2 categories are created

// ==>> # Primitive --> whenever we copy or call it from somewhere we only get it's copied data not the refrence of the memory where original data is stored and the changes we do is only reflected in the copied the data not the original untill and unless we specifically change the original data(({[CALL BY VALUE]})). 
    
//       >--> string, NUMBER, boolean, null(empty), undefined, symbol(it is used to make a value(ex - button) unique), BigInt 

// ---------------------------------*******************------------------------------------------------

/*JAVASCRIPT IS DYNAMIC TYPE LANGUAGE BECAUSE
    
--->  The short answer is: JavaScript trades performance for expressive power and dynamism.

       Essentially, being "dynamically-typed" means that all of the variables in your program (function arguments and all), their "types" do not need to be defined before run-time.

       This allows us the ability to run our scripts immediately

       It allows our program the ability to alter value types during runtime (type coercion)

       And it allows for more polymorphism (classes/objects that share a single interface).

       So not only are your development iterations sped up, but your program can be more interwoven, and, during execution, the language itself tries to help interpret things.

       There are certainly pros and cons to doing it this way, but I think JavaScript's flexibility and dynamism is one of the reasons it is so well suited to the client-side of the web, which in turn is why it became so popular (that and it's prototype-based inheritance).

*/

// ex -

// const score = 100
 const scoreValue = 100.3 // typeof ==> number

 const isLoggedIn = false // typeof ==> Boolean
// const outsideTemp = null  // if run inside typeof gives Object
// let userEmail;

const Id = Symbol("123") // typeof ==> symbol
const anotherId = Symbol("123")

console.log(Id === anotherId);// to check whether they both are same or not(well they are not same as return type is symbol which is another datatype(value) unique for every return) output ==> false

const BigNumber = 384758604857687909598794n // syntax to write a bigInt  // typeof ==> bigInt

// --------------------------**********************---------------------------

// ==>> # Refrence(Non Primitive) --> The refrence of memory of a Data can be directly allocated to a particular or any other function, variable etc.     

     // >--> Array, Objects, Functions // they are called function(return datatype in typeof but Function's return is called object function)

const heroes = ["shaktiman", "nagraaj", "doga"] // arrays

let myObj = {
       name:  "Tushar",
       age: 25, 
} // Objects

const myFunction = function(){
       console.log("Hello World");
       
} // a function is given to a or declared in a variable or stored in a variable // typeof ==> function(returns function but is called object function)

console.log(typeof BigNumber);

// documentation for thic chapter ==>
       // https://262.ecma-international.org/5.1/#sec-11.4.3


// +++++++++++++++++++++++++---------------------------------+++++++++++++++++++++++++++++

// MEMORY --> There are two types of memory
// Stack(all Primitive types uses stack memory){call by value}, 
// Heap(non-primitive type uses heap memory){call by refrence}

let myYoutubename = "tushardotcom"

let anothername = myYoutubename  // It get's copied value not the original
anothername = "chaiaurcode"// original will not change only copy will change

console.log(myYoutubename);
console.log(anothername);

let userOne = {
       email: "tushar@gmail.com",
       upi: "tushar@oki"
}
console.log(userOne.email);// here userOne.email will not change 
let userTwo = userOne// but here it will change beacause of heap memory as it is call by refrence and it doesnot give copy but gives real value

userTwo.email = "anshtk@gmail.com" // value will change 

console.log(userOne.email);
console.log(userTwo.email);// heap memory --> call by refrence it get's refrence of the memory space

