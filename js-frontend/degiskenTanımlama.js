// degisken tanımlama camelCase
let fullName = " ";
let fullNameInfo = " ";

// Spaces Around Operators
// Always put spaces around operators ( = + - * / ), and after commas:

let x = y + z;
const myArray = ["Volvo", "Saab", "Fiat"];

// Code Indentation
// Always use 2 spaces for indentation of code blocks:
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
  }

//   Statement Rules
// General rules for simple statements:

// Always end a simple statement with a semicolon.
const cars = ["Volvo", "Saab", "Fiat"];

const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// General rules for complex (compound) statements:

// Put the opening bracket at the end of the first line.
// Use one space before the opening bracket.
// Put the closing bracket on a new line, without leading spaces.
// Do not end a complex statement with a semicolon.

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
  }

  for (let i = 0; i < 5; i++) {
    x += i;
  }

//   object rules

const personl = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };

//   Line Length < 80
// For readability, avoid lines longer than 80 characters.

// If a JavaScript statement does not fit on one line, the best place to break it, is after an operator or a comma.

document.getElementById("demo").innerHTML =
"Hello Dolly.";

//Variable and function names written as camelCase
// Global variables written in UPPERCASE (We don't, but it's quite common)
// Constants (like PI) written in UPPERCASE
// classlar ClassList şeklinde yazılacak const olanlar full büüyk harf

class NewClass{

}

const LOGIN_MODAL_SELECTOR = "#login-modal";


// Use "" instead of new String()
// Use 0 instead of new Number()
// Use false instead of new Boolean()
// Use {} instead of new Object()
// Use [] instead of new Array()
// Use /()/ instead of new RegExp()
// Use function (){} instead of new Function()