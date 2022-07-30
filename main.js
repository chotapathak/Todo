

// Selector

let todoInput = document.querySelector('.todo-input');
// let todoButton = document.getElementById('todo-button').onclick = function(){
//     console.log('this is onclick function')
// }
let todoButton = document.querySelector('.todo-button');
let todoList = document.querySelector('.todo-list');

// EventListener

todoButton.addEventListener('click', addTodo);
todoButton.addEventListener('click', deleteCheck);


// Function

function addTodo(event){

    event.preventDefault();
    console.log('This is working')
    // To create a div for todo
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    // create list of todos
    let newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    // added newTodo list to todoDiv 
    todoDiv.appendChild(newTodo);

    // created a check button 
    let completeButton = document.createElement('button');
    completeButton.innerHTML = "<i class='fas fa-check'></i>";
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton)


    // created a delete button 
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = "<i class='fas fa-trash'></i>";
    deleteButton.classList.add('trash-btn');
    todoDiv.appendChild(deleteButton)

    // append it to todolist
    todoList.appendChild(todoDiv);
    // to clear input value from the form
    todoInput.value = '';
    // after creating an element attack a listener
    tod
}

// add delete function
function deleteCheck(){
    
}
