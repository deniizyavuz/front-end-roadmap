function createItem(name){
    let a=document.createElement('p');
    a.textContent= name;
    return a;
}

const sidebar = document.querySelector('.sidebar');
sidebar.appendChild(createItem('Home'));
sidebar.appendChild(createItem('Services'));
sidebar.appendChild(createItem('About Us'));