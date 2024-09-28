const inputBox = document.getElementById("taskInput");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === '') {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.onclick = function () {
      li.remove();
    };

    li.appendChild(span);
    listContainer.appendChild(li);
  }
  inputBox.value = "";
}

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  } else if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove();
  }
}, false);


const initialTasks = ["Task 1", "Task 2", "Task 3"];
initialTasks.forEach(task => {
  let li = document.createElement("li");
  li.innerHTML = task;

  let span = document.createElement("span");
  span.innerHTML = "\u00d7";
  span.onclick = function () {
    li.remove();
  };

  li.appendChild(span);
  listContainer.appendChild(li);
});