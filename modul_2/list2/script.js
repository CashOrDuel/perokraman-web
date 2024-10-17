const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');
const deadlineInput = document.getElementById('deadline');
const categoryInput = document.getElementById('category');
const searchInput = document.getElementById('search-input');
const taskCounter = document.getElementById('task-counter');

// Load tasks from local storage
window.addEventListener('load', () => {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToList(task.text, task.completed, task.deadline, task.category));
    updateTaskCounter();
});

// Add task to list
addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();
    const deadlineValue = deadlineInput.value;
    const categoryValue = categoryInput.value;

    if (taskText) {
        addTaskToList(taskText, false, deadlineValue, categoryValue);
        saveTasks();
        taskInput.value = '';
        deadlineInput.value = '';
        categoryInput.value = 'Work';
    }
});

// Add task to the DOM and set up event listeners
function addTaskToList(taskText, completed, deadline, category) {
    const taskElement = document.createElement('li');
    taskElement.classList.add('list-item');
    
    const taskTextElement = document.createElement('span');
    taskTextElement.textContent = `${taskText} [${category}]`;
    if (completed) taskTextElement.classList.add('completed');
    taskElement.appendChild(taskTextElement);

    if (deadline) {
        const deadlineElement = document.createElement('span');
        deadlineElement.textContent = ` (Deadline: ${new Date(deadline).toLocaleString()})`;
        taskElement.appendChild(deadlineElement);
    }

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.classList.add('delete-button');
    taskElement.appendChild(deleteBtn);
    taskList.appendChild(taskElement);

    // Mark task as completed
    taskTextElement.addEventListener('click', () => {
        taskTextElement.classList.toggle('completed');
        saveTasks();
        updateTaskCounter();
    });

    // Delete task
    deleteBtn.addEventListener('click', () => {
        taskElement.classList.add('fade-out');
        setTimeout(() => {
            taskList.removeChild(taskElement);
            saveTasks();
            updateTaskCounter();
        }, 500);
    });

    updateTaskCounter();
}

// Save tasks to local storage
function saveTasks() {
    const tasks = [];
    taskList.querySelectorAll('li').forEach(taskItem => {
        const taskText = taskItem.querySelector('span').textContent.split(' [')[0];
        const completed = taskItem.querySelector('span').classList.contains('completed');
        const deadline = taskItem.querySelector('span:nth-child(2)')?.textContent.replace(' (Deadline: ', '').replace(')', '');
        const category = taskItem.querySelector('span').textContent.split(' [')[1]?.replace(']', '');
        tasks.push({ text: taskText, completed, deadline, category });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Update task counter
function updateTaskCounter() {
    const totalTasks = taskList.querySelectorAll('li').length;
    const completedTasks = taskList.querySelectorAll('.completed').length;
    taskCounter.textContent = `Total: ${totalTasks}, Completed: ${completedTasks}`;
}

// Search tasks
searchInput.addEventListener('input', () => {
    const searchText = searchInput.value.toLowerCase();
    document.querySelectorAll('.list-item').forEach(item => {
        const taskText = item.querySelector('span').textContent.toLowerCase();
        item.style.display = taskText.includes(searchText) ? '' : 'none';
    });
});
