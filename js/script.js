// // Get the input field and add button
// const taskInput = document.getElementById("taskInput");
// const addTaskBtn = document.getElementById("addTaskBtn");
// const taskList = document.getElementById("taskList");

// // Add event listener to the button
// addTaskBtn.addEventListener("click", addTask);

// // Function to add task
// function addTask() {
//     const taskText = taskInput.value.trim();

//     // Check if input is not empty
//     if (taskText === "") {
//         alert("Please enter a task.");
//         return;
//     }

//     // Create new list item
//     const li = document.createElement("li");
//     li.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;

//     // Add delete functionality to the delete button
//     li.querySelector(".delete-btn").addEventListener("click", function() {
//         li.remove();
//     });

//     // Append the new task to the list
//     taskList.appendChild(li);

//     // Clear input field
//     taskInput.value = "";
// }
// Get the input field and add button
let taskInput = document.getElementById("taskInput");
let addTaskBtn = document.getElementById("addTaskBtn");
let taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function creation() {
  let CreatLi = document.createElement("li");
  CreatLi.className = "creatLi";
  taskList.appendChild(CreatLi);


  function put() {
    let inputValue = taskInput.value;
    CreatLi.innerHTML = `${inputValue} <button class="delete-btn">Delet</button>`;
  }
  put();
  function Delet(){
    CreatLi.querySelector(".delete-btn").addEventListener('click' , function(){
        CreatLi.remove();
      taskInput.value = "";

    })
  }
  Delet()
});
