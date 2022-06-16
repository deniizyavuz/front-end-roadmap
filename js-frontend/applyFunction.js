// The JavaScript apply() Method
// In this example the fullName method of person is applied on person1:

const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const person1 = {
    firstName: "Mary",
    lastName: "Doe"
  }
  
  // This will return "Mary Doe":
  person.fullName.apply(person1);

  //The Difference Between call() and apply()
// The difference is:

// The call() method takes arguments separately.

// The apply() method takes arguments as an array.

// The apply() method is very handy if you want to use an array instead of an argument list.

const person2 = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person3 = {
    firstName:"John",
    lastName: "Doe"
  }
  
  person2.fullName.apply(person3, ["Oslo", "Norway"]);

  //Simulate a Max Method on Arrays
// You can find the largest number (in a list of numbers) using the Math.max() method:

Math.max.apply(null, [1,2,3]); // Will also return 3

Math.max.apply(Math, [1,2,3]); // Will also return 3

Math.max.apply(0, [1,2,3]); // Will also return 3

