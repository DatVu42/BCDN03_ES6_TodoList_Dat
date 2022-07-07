let taskArr = [];
let id = 0;

let addNewTask = () => {
    id = id++;
    let taskContent = document.getElementById("newTask").value;
    let status = "todo";
    taskArr.push({
        id: ++id,
        content: taskContent,
        status: status,
    });

    renderTask(taskArr);
    document.getElementById("newTask").value = "";
    // console.log(taskArr);
}

let renderTask = (taskArr) =>  {
    let todo = "";
    let completed = "";
    taskArr.map((task, index) => {
        if (task.status == "todo") {
            todo += `
            <li>${task.content} 
                <span>
                    <span id="delTodo"><i class="far fa-trash-alt"></i></span>
                    <span onclick="changeStatus('${task.id}')" id="chkComplete"><i class="fas fa-check-circle"></i></span>
                </span>
            </li>
        `
        };

        if (task.status == "completed") {
            completed += `
            <li>${task.content} 
                <span>
                    <span id="delTodo"><i class="far fa-trash-alt"></i></span>
                    <span onclick="changeStatus('${task.id}')" id="chkComplete"><i class="fas fa-check-circle"></i></span>
                </span>
            </li>
        `
        };
    });
    
    document.getElementById("todo").innerHTML = todo;
    document.getElementById("completed").innerHTML = completed;
}

let changeStatus = (id) => {
    let newTaskArr = [...taskArr];
    let result = newTaskArr.find(task => task.id == id);
    if (result.status == "todo") {
        result.status = "completed";
    } else {
        result.status = "todo";
    }
    renderTask(newTaskArr);
}   