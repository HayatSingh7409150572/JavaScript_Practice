/*---Let_Var_Const--------

let and const both are ES6(2015) features


#1: Variable scopes
The var variables belong to the global scope when you define them outside a function. For example:
*/

//var counter=100

//In this example, the counter is a global variable. It means that the counter variable is accessible by any functions.

//When you declare a variable inside a function using the var keyword, the scope of the variable is local. For example:

// function increase() {
//     var counter=2000
//     return counter
// }

// function decrease(){
//     return counter
// }

// console.log(decrease())

// cannot access the counter variable here



//Now if we are using let outside the the scope then it will throw error  cause let is a blocked scope

// function komal() {
    
//     var hayat=100
// 	console.log("Inside the loop:",hayat);
//    // console.log(str);
// }

//console.log(hayat);


//#2:let is locally scoped 


  



