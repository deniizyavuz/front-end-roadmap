// TEKRAR BAK

// A rest parameter allows you to represent an indefinite number of arguments as an array. See the following syntax:

// function fn(a,b,...args) {
//    //...
// }
// Code language: JavaScript (javascript)
// The last parameter (args) is prefixed with the three-dots ( ...). It’s called a rest parameter ( ...args).

// All the arguments you pass to the function will map to the parameter list. In the syntax above, the first argument maps to a, the second one maps to b, and the third, the fourth, etc., will be stored in the rest parameter args as an array. For example:

// fn(1, 2, 3, "A", "B", "C");
// Code language: JavaScript (javascript)
// The args array stores the following values:

// [3,'A','B','C']
// Code language: JSON / JSON with Comments (json)
// If you pass only the first two parameters, the rest parameter will be an empty array:

// fn(1,2);
// The args will be:

// []
// Code language: JSON / JSON with Comments (json)
// Notice that the rest parameters must appear at the end of the argument list. The following code will result in an error:

// function fn(a,...rest, b) {
//  // error
// }
// Code language: JavaScript (javascript)
// Error:

// SyntaxError: Rest parameter must be last formal parameter

// ***************

// function sum(...args) {
//     let total = 0;
//     for (const a of args) {
//         total += a;
//     }
//     return total;
// }

// sum(1, 2, 3);
// Code language: JavaScript (javascript)
// The output of the script is:

// 6
// In this example, args in an array. Therefore, you could use the for..of loop to iterate over its elements and sum them up.

// ***************

// Assuming that the caller of the sum() function may pass arguments with various kinds of data types such as number, string, and boolean, and you want to calculate the total of numbers only:

// function sum(...args) {
//   return args
//     .filter(function (e) {
//       return typeof e === 'number';
//     })
//     .reduce(function (prev, curr) {
//       return prev + curr;
//     });
// }
// Code language: JavaScript (javascript)
// The following script uses the new sum() function to sum only numeric arguments:

// let result = sum(10,'Hi',null,undefined,20); 
// console.log(result);
// Code language: JavaScript (javascript)
// Output:

// 30
// Note that without the rest parameters, you have to use the arguments object of the function.

