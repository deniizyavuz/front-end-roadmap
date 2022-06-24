// Differences Between var and let

// Problem with var
// There's a weakness that comes with  var. I'll use the example below to explain:

//     var greeter = "hey hi";
//     var times = 4;

//     if (times > 3) {
//         var greeter = "say Hello instead"; 
//     }
    
//     console.log(greeter) // "say Hello instead"
// So, since times > 3 returns true, greeter is redefined  to "say Hello instead". While this is not a problem if you knowingly want greeter to be redefined, it becomes a problem when you do not realize that a variable greeter has already been defined before.

// If you have used greeter in other parts of your code, you might be surprised at the output you might get. This will likely cause a lot of bugs in your code. This is why let and const are necessary.

// However, if the same variable is defined in different scopes, there will be no error:

//     let greeting = "say Hi";
//     if (true) {
//         let greeting = "say Hello instead";
//         console.log(greeting); // "say Hello instead"
//     }
//     console.log(greeting); // "say Hi"
// Why is there no error? This is because both instances are treated as different variables since they have different scopes.

// you should prefer the let , var works in funtion let works in block(){}
// var counter;
// In this example, the counter is a global variable. It means that the counter variable is accessible by any functions.

// *****

// function increase() {
//     var counter = 10;

// In this example, the counter variable is local to the increase() function. It cannot be accessible outside of the function.

// *****

// for (var i = 0; i < 5; i++) {
// 	console.log("Inside the loop:", i);
// }

// console.log("Outside the loop:", i);

// Inside the loop: 0 
// Inside the loop: 1 
// Inside the loop: 2 
// Inside the loop: 3 
// Inside the loop: 4 
// Outside the loop: 5

// In this example, the i variable is a global variable. Therefore, it can be accessed from both inside and after the for loop.

// *****

// for (let i = 0; i < 5; i++) {
// 	console.log("Inside the loop:", i);
// }

// console.log("Outside the loop:", i);

// Inside the loop: 0
// Inside the loop: 1
// Inside the loop: 2
// Inside the loop: 3
// Inside the loop: 4
// The error:

// Uncaught ReferenceError: i is not defined

// Since this example uses the let keyword, the variable i is blocked scope. It means that the variable i only exists and can be accessible inside the for loop block.

// In JavaScript, a block is delimited by a pair of curly braces {} like in the if...else and for statements:

// *****

// The var keyword allows you to redeclare a variable without any issue:

// var counter = 10;
// var counter;
// console.log(counter); // 10
// Code language: JavaScript (javascript)
// However, if you redeclare a variable with the let keyword, you will get an error:

// let counter = 10;
// let counter; // error