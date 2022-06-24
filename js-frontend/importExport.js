// Import&Export

// Export:

// To export a variable, a function, or a class, you place the export keyword in front of it as follows:

// // log.js
// export let message = 'Hi';

// export function getMessage() {
//   return message;
// }

// export function setMessage(msg) {
//   message = msg;
// }

// export class Logger {
// }

// In this example, we have the log.js module with a variable, two functions, and one class. We used the export keyword to exports all identifiers in the module.

// Note that the export keyword requires the function or class to have a name to be exported. You can’t export an anonymous function or class using this syntax.

// JavaScript allows you to define a variable, a function, or a class first then export it later as follows:

// // foo.js
// function foo() {
//    console.log('foo');
// }

// function bar() {
//   console.log('bar');
// }
// export foo;

// In this example, we defined the foo() function first and then exported it. Since we didn’t export the bar() function, we couldn’t access it in other modules. The bar() function is inaccessible outside the module or we say it is private.

// ***
// Import:

// // greeting.js
// export let message = 'Hi';

// export function setMessage(msg) {
//   message = msg;
// }

// When you import the message variable and setMessage() function, you can use the setMessage() function to change the value of the message variable as shown below:

// // app.js
// import {message, setMessage } from './greeting.js';
// console.log(message); // 'Hi'

// setMessage('Hello');
// console.log(message); // 'Hello'
// However, you can’t change the value of the message variable directly. The following expression causes an error:

// message = 'Hallo'; // error

// ***

// // cal.js
// export let a = 10,
//            b = 20,
//            result = 0;

// export function sum() {
//   result = a + b;
//   return result;
// }

// export function multiply() {
//   result = a * b;
//   return result;
// }

// And you want to import these bindings from the cal.js, you can explicitly list them as follows:

// import {a, b, result, sum, multiply } from './cal.js';
// sum();
// console.log(result); // 30

// multiply();
// console.log(result); // 200

// ***

// Limitation of import and export statements
// Note that you must use the import or export statement outside other statements and functions. The following example causes a SyntaxError:

// if( requiredSum ) {
//    export sum;
// }

// Because we used the export statement inside the if statement. Similarly, the following import statement also causes a SyntaxError:

// function importSum() {
//    import {sum} from './cal.js';
// }

// Because we used the import statement inside a function.

// The reason for the error is that JavaScript must statically determine what will be exported and imported.

// ***

// Aliasing
// JavaScript allows you to create aliases for variables, functions, or classes when you export and import. See the following math.js module:

// // math.js
// function add( a, b ) {
//    return a + b;
// }

// export { add as sum };

// In this example, instead of exporting the add() function, we used the as keyword to assign the sum() function an alias.

// So when you import the add() function from the math.js module, you must use sum instead:

// import { sum } from './math.js';

// If you want to use a different name when you import, you can use the as keyword as follows:

// import {sum as total} from './math.js';
