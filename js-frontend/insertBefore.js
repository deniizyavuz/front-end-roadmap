//The newNode is the new node to be inserted.
//The existingNode is the node before which the new node is inserted. If the existingNode is null, the insertBefore() inserts the newNode at the end of the parentNode‘s child nodes.
//The insertBefore() returns the inserted child node.
let items = document.getElementById('item');
    let lis = document.createElement('li');
        lis.textContent = 'Home';
        items.insertBefore(li, item.firstElementChild);