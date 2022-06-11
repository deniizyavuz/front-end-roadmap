let lin = document.querySelector('#item');
    lin.style.color = 'red';
    lin.style.fontWeight = 'bold';

    lin.onclick=function(){
        item.style.color = 'blue';
      }

let message = document.querySelector('#item');
    let style = getComputedStyle(message);

    console.log('color:', style.color);
    console.log('background color:', style.backgroundColor);
    console.log('font-size', style.font);
