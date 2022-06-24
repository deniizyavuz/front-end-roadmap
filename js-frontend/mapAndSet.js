//set used for dublicated values

const myArray = [1, 2, 3, 4, 5, 5, 5, 1, 2];
const mySet = new Set(myArray);
mySet.add(6); //add 6 to set
mySet.delete(3); //delete 3 to set
mySet.clear(); //clear all inside the set
mySet.size(); // it gives size of set

console.log(myArray);
console.log(mySet);
console.log(mySet.has(5)); //5 is inn the set? if it is yes true if it is nit false

// output is set {1,2,3,4,5} it throw dublicated values

const uniqueArray = [...mySet];

console.log(uniqueArray); // now we have [1,2,3,4,5] throw dublicated

///map
//
const a = {};
const b = {};

const myMap = new Map([
  [a, "a"],
  [b, "b"],
]);

console.log(myMap); //if we dont use the map we dont see the const a because it only show the last one but with map we can see output like-- Map { {} => 'a', {} => 'b'  }
