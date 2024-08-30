function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoText = todoInput.value.trim();

    if (todoText !== "") {
        const todoList = document.getElementById("todo-list");

        const listItem = document.createElement("li");
        listItem.textContent = todoText;

        // Mark as completed when clicked
        listItem.addEventListener("click", function () {
            listItem.classList.toggle("completed");
        });

        // Add delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", function () {
            todoList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);

        todoInput.value = "";
    }
}
