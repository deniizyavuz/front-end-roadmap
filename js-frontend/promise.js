const todos = [
  { title: "Todo 1", description: "deneme todo" },
  { title: "Todo 2", description: "deneme todo2" },
  { title: "Todo 3", description: "deneme todo3" },
];

let todoListElement = document.getElementById("item");

function todoList() {
  setTimeout(() => {
    let todoItems = "";
    todos.forEach((item) => {
      todoItems += `
          ${item.title}
          ${item.description}
        `;
    });
    todoListElement.innerText = todoItems;
  }, 1000);
}

function newTodo(todo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      todos.push(todo);
      const e = false;

      if (!e) {
        resolve();
      } else {
        reject("There is an error");
      }
    }, 2000);
  });
}

newTodo({
  title: "Todo 4",
  description: "deneme todo4",
}).then((response) => {
  todoList();
});

todoList();

//fonksiyonun işinin bitip bitmediğine göre yola devam eder.
// Promise.all tüm promiseleri array içinde yaazıp çalıştırır.
