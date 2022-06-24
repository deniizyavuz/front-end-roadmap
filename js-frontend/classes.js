// Classes:

// export class Animal {
// 	constructor(type,legs){
// 		this.type = type;	//this Animal class has a type value type
// 		this.legs = legs;
// 	}
// 	makeNoise(sound = 'Loud Noise'){
// 	console.log(sound);
// 	}
// }

// *
// import { Animal } from './animal.js';

// let cat = new Animal('Cat', 4):

// cat.legs = 3;
// cat.makeNoise('Meow');

// console.log(cat.legs)

// Output:
// Meow
// 3

// ***
// Static
// When you assigned a value to variable it affects both side ezport and import.

// ***

// export class Animal {
// 	constructor(type,legs){
// 		this.type = type;	//this Animal class has a type value type
// 		this.legs = legs;
// 	}
// 	makeNoise(sound = 'Loud Noise'){
// 	console.log(sound);
// 	}

// 	get metaData(){
// 		return `Type: ${this.type}, Legs: ${this.legs}`;
// }

// *
// import { Animal } from './animal.js';

// let cat = new Animal('Cat', 4);
// console.log(cat.metaData);

// Output Type: Cat, Legs:4

// ***

// export class Animal {
// 	constructor(type,legs){
// 		this.type = type;	//this Animal class has a type value type
// 		this.legs = legs;
// 	}
// 	makeNoise(sound = 'Loud Noise'){
// 	console.log(sound);
// 	}

// 	get metaData(){
// 		return `Type: ${this.type}, Legs: ${this.legs}`;
// }

// export class Cat extends Animal{
// 	makeNoise(sound="meow") {
// 		console.log(sound);
// 	}
// }

// *

// import { Animal,Cat } from './animal.js';

// let cat = new Cat('Cat', 4);
// cat.makeNoise();
// console.log(cat.metaData);

// Output:
// meow
// Type: Cat, Legs:4

// ******************************
