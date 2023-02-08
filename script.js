const input = document.querySelector('#add-todo');
const addBtn = document.getElementById('add-btn');
const todoContainer = document.getElementById('todo-container');

addBtn.addEventListener('click',(e) => createTodoItem())

function createTodoItem(fetchedTodoItem = '') {
        if(input.value || fetchedTodoItem) {
            const p = document.createElement('p');
            const desciption = fetchedTodoItem ? fetchedTodoItem.desciption : input.value;
            const completed = fetchedTodoItem ? fetchedTodoItem.isCompleted : false;
            if(completed) p.style.textDecoration = 'line-through';
            p.innerText = desciption;
            todoContainer.appendChild(p)
            const todo = new TodoItem(desciption,id,completed);
            todoItems.push(todo)
        }
}

