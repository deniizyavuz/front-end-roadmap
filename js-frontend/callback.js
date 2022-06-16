function myDisplayer(some) {
    document.getElementById("demo").innerHTML = some;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  //
  myCalculator(5, 5, myDisplayer);
  
  setTimeout(myFunction, 3000);

  function myFunction() {
    document.getElementById("demo").innerHTML = "I love You !!";
  }  

  //
  setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  document.getElementById("demo").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}

//
let myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.htm");
    req.onload = function() {
      if (req.status == 200) {
        myResolve(req.response);
      } else {
        myReject("File not Found");
      }
    };
    req.send();
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
  //
  async function myFunction() {
    return "Hello";
  }
  myFunction().then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );

//
async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      resolve("I love You !!");
    });
    document.getElementById("demo").innerHTML = await myPromise;
  }
  
  myDisplay();