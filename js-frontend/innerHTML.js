let item = document.getElementById("item");

// create new li element
let li = document.createElement("li");
li.textContent = "About Us";
// add it to the ul element
item.appendChild(li);

console.log(item.innerHTML);
