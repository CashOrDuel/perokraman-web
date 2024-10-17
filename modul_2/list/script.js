// Selecting HTML elements
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

// Function to add task to the list
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if (taskText) {
        const listItem = document.createElement('li');
        listItem.className = 'list-item';
        
        const taskTextElement = document.createElement('span');
        taskTextElement.textContent = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-button';
        deleteBtn.innerHTML = '&times;'; // Cross symbol for delete button

        // Event to delete task from the list
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(taskTextElement);
        listItem.appendChild(deleteBtn);
        taskList.appendChild(listItem);

        taskInput.value = ''; // Clear input after adding
    }
});

// Allow pressing "Enter" to add task
taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addBtn.click();
    }
});
