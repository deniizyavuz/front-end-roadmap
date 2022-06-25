# front-end-roadmap
ES6

Template Literals:

let word1 = 'Dylan';
let word2 = 'Israel';

const fullName = word1 + ' ' + word2;

console.log(fullName);

*********

let word1 = 'Dylan';
let word2 = 'Israel';
let num1 = 2;
let num2 = 3;
let example = 'Hello + World'

**********

Destructuring Objects:

const personealInfotmation = {
	firstName: 'Dylan',
	lastName: 'Israel',
	city: 'Austin',
	state: 'Texas'
};

const{firstName: fn, lastName: fn} = personalInformation;

console.log(`${fn} ${fn}`);

Output:"Dylan Israel"	

*************

Destructuring Arrays:

let [firstName, middleName] = ['Dylan', 'Coding God','Israel'];

console.log(firstName + middleName);

Output: "DylanCoding God"

**
let [firstName, middleName, lastName] = ['Dylan', 'Coding God','Israel'];

lastName = 'Clements';

console.log(lastName);

Output:"Clements"

**************

Object Literal:

function addressMaker{city, state} {
	const newAdress = {newCity: city, newState: state};
	console.log(newAdress);
}

addressMaker('Austin', 'Texas');

Output:{newCity: "Austin", newState: "Texas"}

***

function addressMaker{city, state} {
	const newAdress = {city, state};
	console.log(newAddress);
}

addressMaker('Austin', 'Texas');

Output:{city: "Austin", state: "Texas"}

******************

Object Literal(Challenge);

function addressMaker(adress) {
	const {city, state} = address
	const newAddress = {
	city,
	state,
	country : 'United State'
	};
	console.log(`${newAddress.city} , ${newAddress.state}, ${newAddress.country}`)  
}

addressMaker({city: 'Austin', state: 'Texas'});

Output:Austin, Texas , United States

******************

For of Loop:

let incomes = [62000, 67000, 75000];
let total = 0;

for(const income of incomes) {
	total += income;
}

console.log(total);

Output:204000

**

let incomes = [62000, 67000, 75000];
let total = 0;

for(const income of incomes) {
	console.log(income);
	total += income;
}

Output: 62000
	67000
	75000

**

let fullName = "Dylan Coding God";

for(const char of fullName) {
	console.log(char)
}

Output:
D
y
l
a
n
.
..


****************

For of Loop(Challenge):

let incomes = [62000, 67000, 75000];

for[let income of incomes) {
	income += 5000;
}

console.log(incomes);

Output:[62000, 67000, 75000]

**

let incomes = [62000, 67000, 75000];

for[let income of incomes) {
	income += 5000;
	console.log(income);
}



Output:[67000,72000, 77000]

*****************

Spread Operator:

let example1 = [1, 2, 3, 4, 5, 6];
let example2 = [...example1];	//example 1dekileri example2ye atar.
example2.push(true);

console.log(example2);
console.log(example1);

Output:[1, 2, 3, 4, 5, 6, true]
       [1, 2, 3, 4, 5, 6]

********************

Rest Operator:

fucntion add(nums) {
	console.log(arguments)
}

add(4, 5, 7, 8, 12)

Output: {0: 4, 1: 5, 2: 7, 3: 8, 4: 12}

**
function add(...nums) {
	console.log(nums);
}

add(4, 5, 7, 8, 12)

Output: [4, 5, 7, 8, 12]

*******************

Arrow Functions:

Normal function:

function add(...nums) {
	let total = nums.reduce(function (x, y) {
	return x+y;
});

	console.log(total);
}

add(4, 5, 7, 8, 12)

Output: 36

**
Arrow function:

function add(...nums) {
	let total = nums.reduce((x, y) => x + y);

	console.log(total);
}

add(4, 5, 7, 8, 12)

Output: 36


**************************

Arrow Function vs Regular Function:

1. Syntax

The arrow function example above allows a developer to accomplish the same result with fewer lines of code and approximately half the typing.

Curly brackets aren’t required if only one expression is present. The above example can also be written like this:

let add = (x, y) => x + y;
If there’s only one argument, then the parentheses are not required either:

let squareNum = x => x * x;
What if there are no arguments?

let sayHi = _ => console.log(“Hi”);

**

2. Arguments binding

Arrow functions do not have an arguments binding. However, they have access to the arguments object of the closest non-arrow parent function. Named and rest parameters are heavily relied upon to capture the arguments passed to arrow functions.

In case of a regular function:

let myFunc = {  
 showArgs(){ 
  console.log(arguments); 
 } 
}; 
myFunc.showArgs(1, 2, 3, 4);

OUTPUT:
0:1
1:2
...

In case of an arrow function:

let myFunc = {  
  showArgs : () => { 
  console.log(...arguments); 
 } 
}; 
myFunc.showArgs(1, 2, 3, 4);

REFERENCE ERROR

**

3. Use of this keyword

let me = { 
 name: "Ashutosh Verma", 
 thisInArrow:() => { 
 console.log("My name is " + this.name); // no 'this' binding here 
 }, 
 thisInRegular(){ 
 console.log("My name is " + this.name); // 'this' binding works here 
 } 
};
me.thisInArrow(); 
me.thisInRegular();

**
However, the arrow functions are only callable and not constructible, i.e arrow functions can never be used as constructor functions. Hence, they can never be invoked with the new keyword.

let add = (x, y) => console.log(x + y);
new add(2,3);


ERROR

**

5. No duplicate named parameters

It means that the following is valid JavaScript:

function add(x, x){}
It is not, however, when using strict mode:

'use strict';
function add(x, x){}
// SyntaxError: duplicate formal argument x
With arrow functions, duplicate named arguments are always, regardless of strict or non-strict mode, invalid.

(x, x) => {}
// SyntaxError: duplicate argument names not allowed in this context



**************************
Default Params:

function add(numArray = []){	//if we dont use array in here forEach function dont work and we get error
	let total = 0;
	numArray.forEach((element) => {
		total += element;
	});
	
	console.log(total);

}

add();

Output: 0

***************************

Includes:

let numArray = [1,2,3,4,5];

console.log(numArray.includes(0));

Output: false

**

let numArray = [1,2,3,4,5];

console.log(numArray.includes(5));

Output: true

******************************


Let&Const:

if(false){
	var example = 5;
}

console.log(example)

Output:null

**

if(false){
	let example = 5;
}

console.log(example)

Output:Reference Error: example is not defined

**

const example = 5;
example = 10;
console.log(example);

Output:error read only

**

const example = [];
example.push = 10;
console.log(example);

Output:[10]

**

const example = [];
example = 10;
console.log(example);

Output:syntax error: example is read only

**

const example = {};
example.firstName = "Dylan";
console.log(example);

Output:{firstName: "Dylan"}

****************************

Import&Export

Export:

To export a variable, a function, or a class, you place the export keyword in front of it as follows:

// log.js
export let message = 'Hi';

export function getMessage() {
  return message;
}

export function setMessage(msg) {
  message = msg;
}

export class Logger {
}

In this example, we have the log.js module with a variable, two functions, and one class. We used the export keyword to exports all identifiers in the module.

Note that the export keyword requires the function or class to have a name to be exported. You can’t export an anonymous function or class using this syntax.

JavaScript allows you to define a variable, a function, or a class first then export it later as follows:

// foo.js
function foo() {
   console.log('foo');
}

function bar() {
  console.log('bar');
}
export foo;

In this example, we defined the foo() function first and then exported it. Since we didn’t export the bar() function, we couldn’t access it in other modules. The bar() function is inaccessible outside the module or we say it is private.

*** 
Import:

// greeting.js
export let message = 'Hi';

export function setMessage(msg) {
  message = msg;
}

When you import the message variable and setMessage() function, you can use the setMessage() function to change the value of the message variable as shown below:

// app.js
import {message, setMessage } from './greeting.js';
console.log(message); // 'Hi'

setMessage('Hello');
console.log(message); // 'Hello' 
However, you can’t change the value of the message variable directly. The following expression causes an error:

message = 'Hallo'; // error

***

// cal.js
export let a = 10,
           b = 20,
           result = 0;

export function sum() {
  result = a + b;
  return result;
}

export function multiply() {
  result = a * b;
  return result;
}

And you want to import these bindings from the cal.js, you can explicitly list them as follows:

import {a, b, result, sum, multiply } from './cal.js';
sum();
console.log(result); // 30

multiply();
console.log(result); // 200

***

Limitation of import and export statements
Note that you must use the import or export statement outside other statements and functions. The following example causes a SyntaxError:

if( requiredSum ) {
   export sum;
}  

Because we used the export statement inside the if statement. Similarly, the following import statement also causes a SyntaxError:

function importSum() {
   import {sum} from './cal.js';
}

Because we used the import statement inside a function.

The reason for the error is that JavaScript must statically determine what will be exported and imported.

***

Aliasing
JavaScript allows you to create aliases for variables, functions, or classes when you export and import. See the following math.js module:

// math.js  
function add( a, b ) {
   return a + b;
}

export { add as sum };

In this example, instead of exporting the add() function, we used the as keyword to assign the sum() function an alias.

So when you import the add() function from the math.js module, you must use sum instead:

import { sum } from './math.js';

If you want to use a different name when you import, you can use the as keyword as follows:

import {sum as total} from './math.js';

************************

padStart() & padEnd():

let example = 'Dylan';

console.log(example.padStart(10, 'a'));

Output: aaaaaDylan

**

let example = 'Dylan';

console.log(example.padEnd(10, 'a'));

Output: Dylanaaaaa

**

let example = 'Dylan Israel';

console.log(example.padStart(10, 'a'));

Output: Dylan Israel

*****************************

Classes:

export class Animal {
	constructor(type,legs){
		this.type = type;	//this Animal class has a type value type
		this.legs = legs;
	}
	makeNoise(sound = 'Loud Noise'){
	console.log(sound);
	}
}

*
import { Animal } from './animal.js';

let cat = new Animal('Cat', 4):

cat.legs = 3;
cat.makeNoise('Meow');

console.log(cat.legs)

Output: 
Meow
3

***
Static
When you assigned a value to variable it affects both side ezport and import.


***


export class Animal {
	constructor(type,legs){
		this.type = type;	//this Animal class has a type value type
		this.legs = legs;
	}
	makeNoise(sound = 'Loud Noise'){
	console.log(sound);
	}

	get metaData(){
		return `Type: ${this.type}, Legs: ${this.legs}`;
}

*
import { Animal } from './animal.js';

let cat = new Animal('Cat', 4);
console.log(cat.metaData);

Output Type: Cat, Legs:4

***

export class Animal {
	constructor(type,legs){
		this.type = type;	//this Animal class has a type value type
		this.legs = legs;
	}
	makeNoise(sound = 'Loud Noise'){
	console.log(sound);
	}

	get metaData(){
		return `Type: ${this.type}, Legs: ${this.legs}`;
}

export class Cat extends Animal{
	makeNoise(sound="meow") {
		console.log(sound);
	}
}

*

import { Animal,Cat } from './animal.js';

let cat = new Cat('Cat', 4);
cat.makeNoise();
console.log(cat.metaData);

Output:
meow
Type: Cat, Legs:4

******************************

Await:





İKİ SİTEDEN EKSİK OLANLARA GÖZ GEZDİR!!!!!!!!!!!!!!!!!!!!!!!!!1
