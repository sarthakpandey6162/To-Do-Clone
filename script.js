const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const currentDate = document.getElementById("currentDate");

function updateDate() {
  const date = new Date();
  currentDate.textContent = date.toDateString();
}
updateDate();

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const li = document.createElement("li");
  li.className = "task";

  const checkmark = document.createElement("div");
  checkmark.className = "checkmark";
  checkmark.onclick = () => toggleComplete(li, checkmark);

  const span = document.createElement("span");
  span.textContent = taskText;
  span.onclick = () => toggleComplete(li, checkmark);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "✖";
  deleteBtn.onclick = () => {
    li.style.animation = "fadeOut 0.5s ease forwards";
    setTimeout(() => taskList.removeChild(li), 500);
  };

  li.appendChild(checkmark);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}

function toggleComplete(taskElement, checkmarkElement) {
  taskElement.classList.toggle("completed");
  checkmarkElement.classList.toggle("checked");
}

const styleSheet = document.createElement("style");
styleSheet.textContent = `
@keyframes fadeOut {
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: 0;
    transform: scale(0.9);
  }
}`;
document.head.appendChild(styleSheet);
