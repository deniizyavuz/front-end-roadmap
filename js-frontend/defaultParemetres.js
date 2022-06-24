// function say(message='Hi') {
//     console.log(message);
// }

// say(); // 'Hi'
// say('Hello') // 'Hello'
// Code language: JavaScript (javascript)
// The default value of the message paramater in the say() function is 'Hi'.

// In JavaScript, default function parameters allow you to initialize named parameters with default values if no values or undefined are passed into the function.

// ******

// function add(x, y) {
//     return x + y;
//  }
 
//  add(100,200);

//  ******

//  function say(message) {
//     console.log(message);
// }

// say(); // undefined

// ******

// function say(message='Hi') {
//     console.log(message);
// }

// say(); // 'Hi'
// say(undefined); // 'Hi'
// say('Hello'); // 'Hello'
// Code language: JavaScript (javascript)
// How it works.

// In the first function call, we didn’t pass any argument into the say() function, therefore message parameter took the default value 'Hi'.
// In the second function call, we passed the undefined into the say() function, hence the message parameter also took the default value 'Hi'.
// In the third function call, we passed the 'Hello' string into the say() function, therefore message parameter took the string 'Hello' as the default value.

// ********

