# front-end-roadmap
Javascript Modules
Function hoisting
One of the advantages of hoisting is that it lets you use a function before you declare it in your code.

catName("Tiger");

function catName(name) {
  console.log("My cat's name is " + name);
}
/*
The result of the code above is: "My cat's name is Tiger"
*/

Without hoisting you would have to write the same code like this:

function catName(name) {
  console.log("My cat's name is " + name);
}

catName("Tiger");
/*
The result of the code above is the same: "My cat's name is Tiger"
*/

****************

var hoisting
Here we declare then initialize the value of a var after using it. The default initialization of the var is undefined.

console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num; // Declaration
num = 6; // Initialization
console.log(num); // Returns 6 after the line with initialization is executed.

The same thing happens if we declare and initialize the variable in the same line.

console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num = 6; // Initialization and declaration.
console.log(num); // Returns 6 after the line with initialization is executed.

If we forget the declaration altogether (and only initialize the value) the variable isn't hoisted. Trying to read the variable before it is initialized results in ReferenceError exception.

console.log(num); // Throws ReferenceError exception - the interpreter doesn't know about `num`.
num = 6; // Initialization

Note however that initialization also causes declaration (if not already declared). The code snippet below will work, because even though it isn't hoisted, the variable is initialized and effectively declared before it is used.

a = 'Cran'; // Initialize a
b = 'berry'; // Initialize b

console.log(a + "" + b); // 'Cranberry'
Copy to Clipboard
let and const hoisting
Variables declared with let and const are also hoisted but, unlike var, are not initialized with a default value. An exception will be thrown if a variable declared with let or const is read before it is initialized.

console.log(num); // Throws ReferenceError exception as the variable value is uninitialized
let num = 6; // Initialization

Note that it is the order in which code is executed that matters, not the order in which it is written in the source file. The code will succeed provided the line that initializes the variable is executed before any line that reads it.

********************

class hoisting
Classes defined using a class declaration are hoisted, which means that JavaScript has a reference to the class. However the class is not initialized by default, so any code that uses it before the line in which it is initialized is executed will throw a ReferenceError.

Function and class expression hoisting
Function expressions and class expressions are not hoisted.

The expressions evaluate to a function or class (respectively), which are typically assigned to a variable. In this case the variable declaration is hoisted and the expression is its initialization. Therefore the expressions are not evaluated until the relevant line is executed.

*****************

you dont use the hoisting if it is not so necesesarry because it slow down the browser

*******
,
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution. This means that if we do this:

    console.log (greeter);
    var greeter = "say hello"
it is interpreted as this:

    var greeter;
    console.log(greeter); // greeter is undefined
    greeter = "say hello"
So var variables are hoisted to the top of their scope and initialized with a value of undefined.

*******************

Functions and variables are stored in memory for an execution context before we execute our code. This is called hoisting.
Functions are stored with a reference to the entire functions, variables with the var keyword with the value of undefined, and variables with the let and const keyword are stored uninitialized.

Scope:

const name = "Lydia"
const age = 21
const city = "San Francisco"


function getPersonInfo() {
  const name = "Sarah"
  const age = 22

  return `${name} is ${age} and lives in ${city}`
}

console.log(getPersonInfo())

It takes city for output because city is not in function and global const cityden alabilir.

***

const name = "Lydia"
const age = 21


function getPersonInfo() {
  const name = "Sarah"
  const age = 22
const city = "San Francisco"	
  
}
return `${name} is ${age} and lives in ${city}`
console.log(getPersonInfo())

It DOESNT takes city for output because city is  in function and localden globale alamaz Reference error verir.


************************

Strict:

To invoke strict mode for an entire script, put the exact statement "use strict"; (or 'use strict';) before any other statements.

// Whole-script strict mode syntax
'use strict';
var v = "Hi! I'm a strict mode script!";

**

Strict mode for functions
Likewise, to invoke strict mode for a function, put the exact statement "use strict"; (or 'use strict';) in the function's body before any other statements.

function strict() {
  // Function-level strict mode syntax
  'use strict';
  function nested() { return 'And so am I!'; }
  return "Hi!  I'm a strict mode function!  " + nested();
}
function notStrict() { return "I'm not strict."; }

***

'use strict';
let mistypeVariable;
                      
mistypeVarible = 17;  // Assuming no global variable mistypeVarible exists
                      // this line throws a ReferenceError due to the
                      // misspelling of "mistypeVariable" (lack of an "a")

***

'use strict';

// Assignment to a non-writable global
var undefined = 5; // throws a TypeError
var Infinity = 5; // throws a TypeError

// Assignment to a non-writable property
var obj1 = {};
Object.defineProperty(obj1, 'x', { value: 42, writable: false });
obj1.x = 9; // throws a TypeError

// Assignment to a getter-only property
var obj2 = { get x() { return 17; } };
obj2.x = 5; // throws a TypeError

// Assignment to a new property on a non-extensible object
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = 'ohai'; // throws a TypeError

***

'use strict';
delete Object.prototype; // throws a TypeError

***

function sum(a, a, c) { // !!! syntax error
  'use strict';
  return a + a + c; // wrong if this code ran
}

***

