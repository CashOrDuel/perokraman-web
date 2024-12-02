const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText) {
        const listItem = document.createElement('li');
        listItem.className = 'list-item';
        
        const taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-button';
        deleteBtn.innerHTML = '&times;'; 
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(taskTextElement);
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);

        taskInput.value = '';
    }
});

taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addBtn.click();
    }
});