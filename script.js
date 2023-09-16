// const todo = [
//   "I want to build a website",
//   "I want to build a mobile",
//   "I want to build a desktop application",
// ];

// localStorage.setItem("todo", JSON.stringify(todo));

// const result = localStorage.getItem("todo");

// // console.log("====================================");
// // console.log(result.split(','));
// // console.log("====================================");

// console.log("====================================");
// console.log('before parse');
// console.log(typeof result);
// console.log("====================================");

// console.log("====================================");
// console.log('after parse');
// console.log(typeof JSON.parse(result));
// console.log("====================================");

// to get the todo items from the storage
function getTodo() {
  const todo = localStorage.getItem("todo");
  // check if local sotrage has the todo key
  if (todo) {
    // parse it to be as an array and return it
    return JSON.parse(todo);
  } else {
    // store a new array and convert it into string
    localStorage.setItem("todo", JSON.stringify([]));
    return [];
  }
}

function displayTodo() {
  // ge the todo
  const todo = getTodo();

  // loop in each item
  todo.forEach(function (item, index) {
    // get todolist ul
    const ul = document.querySelector("#todoList");

    // create a new li
    const child = document.createElement("li");
    // give the created li classes
    child.className =
      "list-group-item d-flex justify-content-between align-items-center";

    // give the content to the li
    child.innerHTML = `
            ${item}
            <div>
                <button class="btn btn-sm btn-warning mr-2" onclick="editTodo(${index})">Edit</button>
                <button class="btn btn-sm btn-danger" onclick="deleteTodo(${index})">Delete</button>
            </div>
        `;

    // append the li into the ul
    ul.append(child);
  });
}

function addNewItem() {
  // get the input
  const input = document.querySelector("#todoInput");

  // get the todo
  const todo = getTodo();

  // add the input value into todo list as a new item
  todo.push(input.value);

  // set new todo data
  localStorage.setItem("todo", JSON.stringify(todo));

  // get the ul and remove all content from it
  const ul = document.querySelector("#todoList");
  ul.innerHTML = "";

  //  re run display todo again
  displayTodo();

  // empty the input value
  input.value = "";
}

function editTodo(index) {

    const todo = getTodo();

  const newTodo = prompt("Edit your task: ", todo[index]);

  if (newTodo != null) {
    todo[index] = newTodo;

    localStorage.setItem("todo", JSON.stringify(todo));

    const ul = document.querySelector("#todoList");

    ul.innerHTML = "";

    displayTodo();
  }
}

//                          1
function deleteTodo(indexFromArray) {
  const todo = getTodo();

  const newTodo = todo.filter(function (item, indexFromFilterFunction) {
    return indexFromArray != indexFromFilterFunction;
  });

  localStorage.setItem("todo", JSON.stringify(newTodo));

  const ul = document.querySelector("#todoList");

  ul.innerHTML = "";

  displayTodo();
}

displayTodo();
