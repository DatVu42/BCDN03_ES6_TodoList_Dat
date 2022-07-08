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
    document.getElementById("newTask").focus();
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
                    <span onclick="deleteTask('${task.id}')" id="delTodo"><i class="far fa-trash-alt"></i></span>
                    <span onclick="changeStatus('${task.id}')" id="chkComplete"><i class="fas fa-check-circle"></i></span>
                </span>
            </li>
        `
        };

        if (task.status == "completed") {
            completed += `
            <li>${task.content} 
                <span>
                    <span onclick="deleteTask('${task.id}')" id="delTodo"><i class="far fa-trash-alt"></i></span>
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
    showAll();
}   

let deleteTask = (id) => {
    let newTaskArr = taskArr.reduce((newArr, taskObj, index) => {
        if (taskObj.id != id) {
            newArr.push(taskObj);
        }
        return newArr;
    }, []);
    taskArr = [...newTaskArr];
    renderTask(taskArr);
}

let sapXepTangDan = () => {
    let newTaskArr = taskArr.sort((nextTask, task) => {
        let nextTaskName = nextTask.content.toLowerCase();
        let taskName = task.content.toLowerCase();

        if (nextTaskName > taskName) {
            return 1;
        }
        if (nextTaskName < taskName) {
            return -1;
        }

        return 1;
    });

    renderTask(newTaskArr);
}

let sapXepGiamDan = () => {
    sapXepTangDan();
    let newTaskArr = taskArr.reverse();
    renderTask(newTaskArr);
}

let showTodos = () => {
    let compELE = document.getElementById("completed");
    compELE.classList.add("display");
}

let showAll = () => {
    let compELE = document.getElementById("completed");
    compELE.classList.remove("display");
}