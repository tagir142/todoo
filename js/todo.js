const field = document.querySelector(".field");
const add = document.querySelector(".add");
const list = document.querySelector(".list");

function createTask(value) {
  const task = document.createElement("div");
  task.textContent = value;
  task.style.backgroundColor = "red";
  return task;
}
function addTask(value) {
  if (field.value) {
    const instance = createTask(field.value);
    list.appendChild(instance);
    field.value = "";
    console.log("zhopa");
  }
}
add.addEventListener("click", addTask);
