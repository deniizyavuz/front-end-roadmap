let content = document.querySelector('.footer');
let firstChild = content.firstChild.nodeName;
console.log(firstChild);

let footer = document.querySelector('.footer');
console.log(footer.lastElementChild);
// The firstChild and lastChild return the first and last child of a node, which can be any node type including text node, comment node, and element node.
// The firstElementChild and lastElementChild return the first and last child Element node.
// The childNodes returns a live NodeList of all child nodes of any node type of a specified node. The children return all child Element nodes of a specified node.
