const input = document.querySelector('.input');
const add = document.querySelector('.add');
let result = document.querySelector('.todo-grid');
let date = document.querySelector('.date');

// Initialize todoList as an empty array if there's no data in localStorage
let todoList = localStorage.getItem('savedTodo');
try {
    todoList = JSON.parse(todoList);
    if (!Array.isArray(todoList)) {
        // Ensure todoList is an array
        todoList = [];
    }
    else{
        showTodoList();
    }
} catch (error) {
    // Handle parsing error
    console.error('Error parsing todoList from localStorage:', error);
    todoList = [];
}

add.addEventListener('click', () => {
    result.innerHTML = '';
    todoList.push({ name: input.value, dueDate: date.value });
    input.value = '';
    localStorage.setItem('savedTodo', JSON.stringify(todoList));
    showTodoList();
});

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        add.click();
    }
});

function showTodoList() {
    result.innerHTML = '';
    todoList.forEach((todoObject,index)=>{
        const html = `
        <div>${todoObject.name}</div> 
        <div>${todoObject.dueDate}</div>
            <button class="delete  js-delete-todo-button"
             >Delete</button>
        `;
        result.innerHTML += html;
    });
    // 11:38:0
    document.querySelectorAll('.js-delete-todo-button').forEach((deleteButton,index)=>{
        deleteButton.addEventListener('click',()=>{
            console.log('hi')
            todoList.splice(index, 1);
            showTodoList();
            localStorage.setItem('savedTodo', JSON.stringify(todoList));
        });

    });

   
  
}
