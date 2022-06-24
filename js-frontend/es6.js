// ES6
// Template Literals:

// let word1 = 'Dylan';
// let word2 = 'Israel';

// const fullName = word1 + ' ' + word2;

// console.log(fullName);

// *********

// let word1 = 'Dylan';
// let word2 = 'Israel';
// let num1 = 2;
// let num2 = 3;
// let example = 'Hello + World'

// **********

// Destructuring Objects:

// const personealInfotmation = {
// 	firstName: 'Dylan',
// 	lastName: 'Israel',
// 	city: 'Austin',
// 	state: 'Texas'
// };

// const{firstName: fn, lastName: fn} = personalInformation;

// console.log(`${fn} ${fn}`);

// Output:"Dylan Israel"

// *************

// Destructuring Arrays:

// let [firstName, middleName] = ['Dylan', 'Coding God','Israel'];

// console.log(firstName + middleName);

// Output: "DylanCoding God"

// **
// let [firstName, middleName, lastName] = ['Dylan', 'Coding God','Israel'];

// lastName = 'Clements';

// console.log(lastName);

// Output:"Clements"

// **************

// Object Literal:

// function addressMaker{city, state} {
// 	const newAdress = {newCity: city, newState: state};
// 	console.log(newAdress);
// }

// addressMaker('Austin', 'Texas');

// Output:{newCity: "Austin", newState: "Texas"}

// ***

// function addressMaker{city, state} {
// 	const newAdress = {city, state};
// 	console.log(newAddress);
// }

// addressMaker('Austin', 'Texas');

// Output:{city: "Austin", state: "Texas"}

// ******************

// Object Literal(Challenge);

// function addressMaker(adress) {
// 	const {city, state} = address
// 	const newAddress = {
// 	city,
// 	state,
// 	country : 'United State'
// 	};
// 	console.log(`${newAddress.city} , ${newAddress.state}, ${newAddress.country}`)
// }

// addressMaker({city: 'Austin', state: 'Texas'});

// Output:Austin, Texas , United States

// ******************

// Spread Operator:

// let example1 = [1, 2, 3, 4, 5, 6];
// let example2 = [...example1];	//example 1dekileri example2ye atar.
// example2.push(true);

// console.log(example2);
// console.log(example1);

// Output:[1, 2, 3, 4, 5, 6, true]
//        [1, 2, 3, 4, 5, 6]

// ********************

// Rest Operator:

// fucntion add(nums) {
// 	console.log(arguments)
// }

// add(4, 5, 7, 8, 12)

// Output: {0: 4, 1: 5, 2: 7, 3: 8, 4: 12}

// **
// function add(...nums) {
// 	console.log(nums);
// }

// add(4, 5, 7, 8, 12)

// Output: [4, 5, 7, 8, 12]

// *******************

// Default Params:

// function add(numArray = []){	//if we dont use array in here forEach function dont work and we get error
// 	let total = 0;
// 	numArray.forEach((element) => {
// 		total += element;
// 	});

// 	console.log(total);

// }

// add();

// Output: 0

// ***************************

// Includes:

// let numArray = [1,2,3,4,5];

// console.log(numArray.includes(0));

// Output: false

// **

// let numArray = [1,2,3,4,5];

// console.log(numArray.includes(5));

// Output: true

// ******************************

// Let&Const:

// if(false){
// 	var example = 5;
// }

// console.log(example)

// Output:null

// **

// if(false){
// 	let example = 5;
// }

// console.log(example)

// Output:Reference Error: example is not defined

// **

// const example = 5;
// example = 10;
// console.log(example);

// Output:error read only

// **

// const example = [];
// example.push = 10;
// console.log(example);

// Output:[10]

// **

// const example = [];
// example = 10;
// console.log(example);

// Output:syntax error: example is read only

// **

// const example = {};
// example.firstName = "Dylan";
// console.log(example);

// Output:{firstName: "Dylan"}
