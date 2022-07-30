const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list')
todoButton.addEventListener('click', addTask)

function addTask(e){
    e.preventDefault();

    const newDiv = document.createElement('div');
    newDiv.classList.add('todo');
    
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newDiv.append(newTodo);
    todoInput.value = '';

    const completeButton = document.createElement('button');
    completeButton.innerHTML = `<i class='fas fa-check'/>`;
    completeButton.classList.add('complete-btn')
    newDiv.append(completeButton);
    completeButton.addEventListener('click', completeTask)


    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<i class='fas fa-trash'/>`;
    deleteButton.classList.add('trash-btn')
    newDiv.append(deleteButton);
    deleteButton.addEventListener('click', deleteTask)

    todoList.append(newDiv);

}

function completeTask(e){
    const item = e.target;
    item.classList.toggle('completed')

}
function deleteTask(e){
    const item = e.target;
    const todo = item.parentElement;
    todo.classList.add('fall'); 
    todo.addEventListener('transitionend', function(){
        item.parentElement.remove()
    })

}