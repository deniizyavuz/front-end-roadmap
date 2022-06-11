
// console.log("hello world")
// console.error("This is an error")
// console.warn("")
// let, const
// numbers,boolean,strings
//array

// for
// for(let i= 0; i<10; i++)
// {
//     console.log(i);
// }
// for(let i= 0; i <= 10; i++)
// {
//     console.log(`For loop number: ${i}`);
// }

// while
// let i=0;
// while(i < 10){
//     console.log(`While loop number: ${i}`);
//     i++;
// }

// forEach, map, filter

//if
// const x='10';
// if(x == 10){
//     console.log('x is 10')
// }
// const x= 5;
// const y= 20;

// if(x === 10 && y > 10){
//     console.log('x is 10');
// }
//     else if(x > 10 || y > 10){
//         console.log('x is greater than 10');
//     }
//     else{
//         console.log('x is less than 10');
//     }

// switch
// const x = 9;

// const color = x > 10 ? 'red' : 'blue'; //simple if else statement

// switch(color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is NOT red or blue')
//         break;
// }

// functions
// function addNums(num1 = 1, num2 =3 ){
//     // console.log(num1 + num2);
//     return num1+num2;
// }
// console.log(addNums(5, 5));

// object orianted programming
// constructor function
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
//     this.getBirthYear = function() {
//         return this.dob.getFullYear();
//     }
//     this.getFullName = function() {
//         return `${this.firstName} ${this.lastName}` 
//     }
// }

// // instantiate object
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '6-9-1970');

// console.log(person1);

// prototype object içinde fonksiyonlar alınmıyor her seferinde ihtiyac oldugunda kullanılıyor
// function Person(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dob = new Date(dob);
// }

// Person.prototype.getBirthYear = function() {
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function() {
//     return `${this.firstName} ${this.lastName}`;
// }

// // instantiate object
// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '6-9-1970');

// console.log(person1.getFullName());

// instead of prototypes we use classes
// class Person{
//     constructor(firstName, lastName, dob) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.dob = new Date(dob);
//     }
//     getBirthYear() {
//         return this.dob.getFullYear();
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// const person1 = new Person('John', 'Doe', '4-3-1980');
// const person2 = new Person('Mary', 'Smith', '6-9-1970');

// console.log(person1.getFullName());

// DOM

// single element 
// const form = document.getElementById('new-form');
// console.log(form);

// const container = document.querySelector('.container'); //single element selector classları ve h1 gibi yazabilirsin sadece bir h1 alacak zaten
// console.log(container);

// const h2 = document.querySelector('h2'); //single element selector classları ve h1 gibi yazabilirsin sadece bir h1 alacak zaten
// console.log(h2)

// multiple element
// const item = document.querySelectorAll('.item');
// console.log(item);

// const items = document.getElementsByClassName('item'); // class namele de alınabilir query kullan ama
// console.log(items);

// const li = document.getElementsByTagName('li'); //query kullan ama
// console.log(li);

// Manipulating the DOM or Changing things in the OM
// const ul = document.querySelector('.items')
    // ul.remove();     // hepsini kaldırır
    // ul.lastElementChild.remove();   //son elementi kaldırır
    // ul.firstElementChild.textContent= 'Hello';  //elementin textini degiştirir
    // ul.children[1].innerText= 'Brad';   // alt başlıkta kaçıncı elementse onun textini değiştirir
    // ul.lastElementChild.innerHTML = '<h3>Hello</h3>';
    // const submit = document.getElementById('submit');
    // submit.style.background = 'blue';               //style değiştirme
    // submit.addEventListener('click' ,(e) => {
    //     e.preventDefault();
    //     console.log(e.target.className);
    // });
    // document.querySelector('#new-form').style.background = '#ccc';

