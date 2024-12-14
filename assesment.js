function addToDo() {
  
    var newTodo = document.getElementById("Todo").value;
  
    var li = document.createElement("li");
    li.textContent = newTodo;
  
    document.getElementById("List").appendChild(li);
  
    document.getElementById("Todo").value = "";
  }