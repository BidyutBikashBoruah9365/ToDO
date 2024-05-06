function addTask(){
    let input = document.getElementById("taskInput").value
    if(input === ""){
        alert("Please Enter A Task")
        return
    }
    let li = document.createElement("li")
    li.textContent = input
    li.addEventListener("click", toggleTask)
    document.getElementById("taskList").appendChild(li)
    document.getElementById("taskInput").value = ""
}

function toggleTask(){
    this.classList.toggle("completed")
}