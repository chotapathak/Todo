// Selector

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');


todoButton.addEventListener('click', addTodo);

function addTodo(e){
    e.preventDefault();
    const newDiv = document.createElement('div');
    newDiv.classList.add('todo');
    
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newDiv.append(newTodo);
    todoList.append(newDiv);
    todoInput.value = '';

    const completeButton = document.createElement('button');
    completeButton.innerHTML = `<i class="fas fa-check"/>`;
    completeButton.classList.add('complete-btn');
    newDiv.append(completeButton);
    // add eventlistener 
    completeButton.addEventListener('click', checkComplete);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<i class="fas fa-trash"/>`;
    deleteButton.classList.add('trash-btn');
    newDiv.append(deleteButton);
    deleteButton.addEventListener('click', deleteTasks);
}

function checkComplete(e){
    const item = e.target;

    item.parentElement.classList.toggle('completed');
    console.log(item.parentElement);
}

function deleteTasks(e){
    const item = e.target;
    item.parentElement.remove();
    // console.log(item.parentElement);
}