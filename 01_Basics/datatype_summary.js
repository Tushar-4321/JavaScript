// in official documentation data is categorised in only two types 
// ===-> Primitive
// ===-> non - primitive
// means how data is stored and how we access data on this basis 2 categories are created

// ==>> # Primitive --> whenever we copy or call it from somewhere we only get it's copied data not the refrence of the memory where original data is stored and the changes we do is only reflected in the copied the data not the original untill and unless we specifically change the original data(({[CALL BY VALUE]})). 
    
//       >--> string, NUMBER, boolean, null(empty), undefined, symbol(it is used to make a value(ex - button) unique), BigInt 

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
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

const Id = Symbol("123")
const anotherId = Symbol("123")

console.log(Id === anotherId);



// ==>> # Refrence(Non Primitive) --> The refrence of memory of a Data can be directly allocated to a particular or any other function, variable etc.     

     // >--> Array, Objects, Functions 

