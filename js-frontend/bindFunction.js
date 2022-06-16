//JavaScript Function bind()
//With the bind() method, an object can borrow a method from another object.

//The example below creates 2 objects (person and member).

//The member object borrows the fullname method from the person object:
const personn = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  
  const member = {
    firstName:"Hege",
    lastName: "Nilsen",
  }
  
  let fullName = personn.fullName.bind(member);

//   This example will try to display the person name after 3 seconds, but it will display undefined instead:

const perso = {
    firstName:"John",
    lastName: "Doe",
    display: function () {
      let x = document.getElementById("demo");
      x.innerHTML = this.firstName + " " + this.lastName;
    }
  }
  
  setTimeout(perso.display, 3000);

//   The bind() method solves this problem.

// In the following example, the bind() method is used to bind person.display to person.

// This example will display the person name after 3 seconds:

const person = {
  firstName:"John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  }
}

let display = person.display.bind(person);
setTimeout(display, 3000);