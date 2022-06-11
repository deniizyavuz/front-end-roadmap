let exam = document.querySelector('#buttons');
console.log(exam.className); 

let div = document.querySelector('#buttons');
div.classList.add('info','visible','block');
for (let cssClass of div.classList) {
    console.log(cssClass);
}