// Get references to DOM elements we will manipulate
const input = document.getElementById('todo-input'); // the text field for new todos
const addBtn = document.getElementById('add-btn'); // the add button
const todoList = document.getElementById('todo-list'); // where todo items go
const counts = document.getElementById('counts'); // status text
const clearCompletedBtn = document.getElementById('clear-completed'); // clear completed button
const clearAllBtn = document.getElementById('clear-all'); // clear all button

// Key for localStorage so we consistently read/write the same key
const STORAGE_KEY = 'crazy_todos_v1';

// Load todos from localStorage (if present), otherwise start with an empty array
let todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');

// Helper: save current todos array to localStorage
function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// Helper: generate a unique id for each todo
function createId() {
  // Using timestamp + random number to avoid collisions
  return Date.now().toString(36) + Math.random().toString(36).slice(2,8);
}

// Helper: render counts (total and completed)
function renderCounts() {
  const total = todos.length;
  const done = todos.filter(t => t.done).length;
  counts.textContent = `${total} item${total !== 1 ? 's' : ''} — ${done} done`;
}

// Create a single DOM node for a todo object and return it
function createTodoNode(todo) {
  const li = document.createElement('li'); // list item wrapper
  li.className = 'todo'; // style class
  if (todo.done) li.classList.add('completed'); // apply completed visuals

  // checkbox to toggle done state
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = !!todo.done;
  checkbox.addEventListener('change', () => {
    todo.done = checkbox.checked; // update model
    if (todo.done) li.classList.add('completed'); else li.classList.remove('completed');
    saveTodos(); // persist
    renderCounts(); // update counts
  });

  // the text node or a contenteditable/ input for editing
  const text = document.createElement('div');
  text.className = 'todo-text';
  text.textContent = todo.text;

  // double-click to edit: replace text with input
  text.addEventListener('dblclick', () => startEditing(todo, li, text));

  // actions: edit and delete buttons
  const actions = document.createElement('div');
  actions.className = 'todo-actions';

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => startEditing(todo, li, text));

  const delBtn = document.createElement('button');
  delBtn.textContent = 'Delete';
  delBtn.addEventListener('click', () => {
    // remove from array
    todos = todos.filter(t => t.id !== todo.id);
    saveTodos();
    render(); // re-render whole list (keeps code simple)
  });

  // append children in order
  li.appendChild(checkbox);
  li.appendChild(text);
  actions.appendChild(editBtn);
  actions.appendChild(delBtn);
  li.appendChild(actions);

  return li;
}

// Start editing a todo: swap the text display with an input field
function startEditing(todo, li, textDiv) {
  const inputEdit = document.createElement('input');
  inputEdit.className = 'edit-input';
  inputEdit.value = todo.text;
  // Replace the text div with editable input
  li.replaceChild(inputEdit, textDiv);
  inputEdit.focus();
  // Save on Enter, cancel on Escape, blur saves too
  function finish(editing) {
    if (editing) {
      const trimmed = inputEdit.value.trim();
      if (trimmed) {
        todo.text = trimmed;
      } else {
        // empty text => delete the todo
        todos = todos.filter(t => t.id !== todo.id);
      }
      saveTodos();
    }
    render(); // re-render to show updates
  }
  inputEdit.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') finish(true);
    if (e.key === 'Escape') finish(false);
  });
  inputEdit.addEventListener('blur', () => finish(true));
}

// Render the entire todo list UI from the todos array
function render() {
  // Clear the list first
  todoList.innerHTML = '';
  // Sort so incomplete items show first (small UX nicety)
  const sorted = todos.slice().sort((a,b) => a.done - b.done);
  // Create DOM nodes and append
  for (const t of sorted) {
    todoList.appendChild(createTodoNode(t));
  }
  renderCounts();
}

// Add a new todo from the input box (validates non-empty)
function addTodo() {
  const raw = input.value;
  const text = raw.trim();
  if (!text) {
    // simple ephemeral feedback: shake the input
    input.classList.add('danger');
    setTimeout(() => input.classList.remove('danger'), 300);
    return;
  }
  const newTodo = {
    id: createId(),
    text,
    done: false,
    createdAt: Date.now()
  };
  todos.push(newTodo);
  saveTodos();
  render();
  input.value = ''; // clear the input
  input.focus(); // focus to keep the typing flow
}

// Clear all completed todos
function clearCompleted() {
  todos = todos.filter(t => !t.done);
  saveTodos();
  render();
}

// Clear all todos (confirmation step)
function clearAll() {
  if (!confirm('Delete ALL todos forever?')) return;
  todos = [];
  saveTodos();
  render();
}

// Event listeners: wire UI controls
addBtn.addEventListener('click', addTodo); // click add
input.addEventListener('keydown', (e) => { // press Enter to add
  if (e.key === 'Enter') addTodo();
});

// Clear buttons
clearCompletedBtn.addEventListener('click', clearCompleted);
clearAllBtn.addEventListener('click', clearAll);

// Initial render when the script loads
render();
