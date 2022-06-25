// Strict:

// To invoke strict mode for an entire script, put the exact statement "use strict"; (or 'use strict';) before any other statements.

// // Whole-script strict mode syntax
// 'use strict';
// var v = "Hi! I'm a strict mode script!";

// **

// Strict mode for functions
// Likewise, to invoke strict mode for a function, put the exact statement "use strict"; (or 'use strict';) in the function's body before any other statements.

// function strict() {
//   // Function-level strict mode syntax
//   'use strict';
//   function nested() { return 'And so am I!'; }
//   return "Hi!  I'm a strict mode function!  " + nested();
// }
// function notStrict() { return "I'm not strict."; }

// ***

// 'use strict';
// let mistypeVariable;
                      
// mistypeVarible = 17;  // Assuming no global variable mistypeVarible exists
//                       // this line throws a ReferenceError due to the
//                       // misspelling of "mistypeVariable" (lack of an "a")

// ***

// 'use strict';

// // Assignment to a non-writable global
// var undefined = 5; // throws a TypeError
// var Infinity = 5; // throws a TypeError

// // Assignment to a non-writable property
// var obj1 = {};
// Object.defineProperty(obj1, 'x', { value: 42, writable: false });
// obj1.x = 9; // throws a TypeError

// // Assignment to a getter-only property
// var obj2 = { get x() { return 17; } };
// obj2.x = 5; // throws a TypeError

// // Assignment to a new property on a non-extensible object
// var fixed = {};
// Object.preventExtensions(fixed);
// fixed.newProp = 'ohai'; // throws a TypeError

// ***

// 'use strict';
// delete Object.prototype; // throws a TypeError


// ******

// function sum(a, a, c) { // !!! syntax error
//     'use strict';
//     return a + a + c; // wrong if this code ran
//   }
  
//   ***