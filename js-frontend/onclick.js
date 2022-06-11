// function openForm() {
//     document.getElementById("my-form").style.display = "block";
//   }
  
//   function closeForm() {
//     document.getElementById("my-form").style.display = "none";
//   }
function closeForm(){
  document.getElementById("my-form").style.display = "none";
}
const buton=document.querySelector('.cancelbtn');
buton.onclick= function() {
    closeForm();
    alert("you close the login page");
}
function openForm(){
  document.getElementById("openform").style.display = "block";
}

// const open=document.querySelector('openform');
// open.onclick=function(){
//   openForm();
//   alert("you open the login page");
// }

const backcolor=document.getElementById('submit');
backcolor.onclick=function(){
  submit.style.background = 'blue';
}
    // submit.style.background = 'blue';               //style değiştirme

const colorc=document.getElementsByTagName('a');
colorc.onclick= function(){
  a.style.color = 'red'; 
}

