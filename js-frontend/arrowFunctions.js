// Arrow Functions:

// Normal function:

// function add(...nums) {
// 	let total = nums.reduce(function (x, y) {
// 	return x+y;
// });

// 	console.log(total);
// }

// add(4, 5, 7, 8, 12)

// Output: 36

// **
// Arrow function:

// function add(...nums) {
// 	let total = nums.reduce((x, y) => x + y);

// 	console.log(total);
// }

// add(4, 5, 7, 8, 12)

// Output: 36


// **************************

// Arrow Function vs Regular Function:

// 1. Syntax

// The arrow function example above allows a developer to accomplish the same result with fewer lines of code and approximately half the typing.

// Curly brackets aren’t required if only one expression is present. The above example can also be written like this:

// let add = (x, y) => x + y;
// If there’s only one argument, then the parentheses are not required either:

// let squareNum = x => x * x;
// What if there are no arguments?

// let sayHi = _ => console.log(“Hi”);

// **

// 2. Arguments binding

// Arrow functions do not have an arguments binding. However, they have access to the arguments object of the closest non-arrow parent function. Named and rest parameters are heavily relied upon to capture the arguments passed to arrow functions.

// In case of a regular function:

// let myFunc = {  
//  showArgs(){ 
//   console.log(arguments); 
//  } 
// }; 
// myFunc.showArgs(1, 2, 3, 4);

// OUTPUT:
// 0:1
// 1:2
// ...

// In case of an arrow function:

// let myFunc = {  
//   showArgs : () => { 
//   console.log(...arguments); 
//  } 
// }; 
// myFunc.showArgs(1, 2, 3, 4);

// REFERENCE ERROR

// **

// 3. Use of this keyword

// let me = { 
//  name: "Ashutosh Verma", 
//  thisInArrow:() => { 
//  console.log("My name is " + this.name); // no 'this' binding here 
//  }, 
//  thisInRegular(){ 
//  console.log("My name is " + this.name); // 'this' binding works here 
//  } 
// };
// me.thisInArrow(); 
// me.thisInRegular();

// **
// However, the arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions. Hence, they can never be invoked with the new keyword.

// let add = (x, y) => console.log(x + y);
// new add(2,3);


// ERROR

// **

// 5. No duplicate named parameters

// It means that the following is valid JavaScript:

// function add(x, x){}
// It is not, however, when using strict mode:

// 'use strict';
// function add(x, x){}
// // SyntaxError: duplicate formal argument x
// With arrow functions, duplicate named arguments are always, regardless of strict or non-strict mode, invalid.

// (x, x) => {}
// // SyntaxError: duplicate argument names not allowed in this context
