const form = document.querySelector(".inputFrom");
const inputFormTask = document.getElementById("inputTask");
const allTasks = document.getElementById("tasks");


form.addEventListener("submit", function(event){
  event.preventDefault();

  if(inputFormTask.value){
    let TaskInput = inputFormTask.value;
  // console.log(TaskInput);

  const taskElement = document.createElement("div");
  taskElement.classList.add("task");

  const taskElementContent = document.createElement("div");
  taskElementContent.classList.add("content");

  taskElement.appendChild(taskElementContent);


  allTasks.appendChild(taskElement);

  const taskElInput = document.createElement("input");
  taskElInput.classList.add("text");
  taskElInput.value = TaskInput;
  taskElInput.setAttribute("readonly", "readonly");

  taskElementContent.appendChild(taskElInput);

  const taskElementDiv = document.createElement("div");
  taskElementDiv.classList.add("btn");

  taskElementContent.appendChild(taskElementDiv);

  const taskElementEditBtn = document.createElement("button");
  taskElementEditBtn.classList.add("edit");
  taskElementEditBtn.innerText = "Edit";

  taskElementDiv.appendChild(taskElementEditBtn);

  const taskElementDeleteBtn = document.createElement("button");
  taskElementDeleteBtn.classList.add("delete");
  taskElementDeleteBtn.innerText = "Delete";

  taskElementDiv.appendChild(taskElementDeleteBtn);

  const taskElementCompleteBtn = document.createElement("button");
  taskElementCompleteBtn.classList.add("complete");
  taskElementCompleteBtn.innerText = "Complete";

  taskElementDiv.appendChild(taskElementCompleteBtn);

  inputFormTask.value = "";

  taskElementEditBtn.addEventListener("click", function(){
    if(taskElementEditBtn.innerHTML.toLowerCase() === "edit"){
      taskElementEditBtn.innerHTML = "save";
      taskElInput.removeAttribute("readonly");
      taskElInput.focus();
    }else{
      taskElementEditBtn.innerHTML = "Edit";
      taskElInput.setAttribute("readonly", "readonly");
    }
  });

  taskElementCompleteBtn.addEventListener("click", function(){
    if(taskElementCompleteBtn.innerText.toLowerCase() === "mark complete"){
      taskElementCompleteBtn.innerText = "Completed";
      taskElInput.classList.add("mark-completed");
    }else{
      taskElementCompleteBtn.innerText = " Mark Complete";
      taskElInput.classList.remove("mark-completed");
    }
  });

  taskElementDeleteBtn.addEventListener("click", function(e){
    allTasks.removeChild(taskElement);
  });
  }else{
    alert("Please Insert the value!");
  }
});