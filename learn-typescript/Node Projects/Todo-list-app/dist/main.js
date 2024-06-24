import inquirer from "inquirer";
let toDo = [];
let loop = true;
const promptUser = async () => {
    while (loop) {
        const answer = await inquirer.prompt([
            {
                name: "task",
                type: "input",
                message: "What do you want to do?",
            },
            {
                name: "addMore",
                type: "confirm",
                message: "Do you want to add more tasks?",
                default: false,
            },
        ]);
        toDo.push({ task: answer.task, completed: false });
        if (!answer.addMore) {
            loop = false;
        }
    }
    // Now, ask the user if they want to mark tasks as completed or remove tasks
    const actionChoice = await inquirer.prompt({
        name: "action",
        type: "list",
        message: "Choose an action:",
        choices: ["Mark task as completed", "Remove task", "Quit"],
    });
    if (actionChoice.action === "Mark task as completed") {
        await markTaskCompleted();
    }
    else if (actionChoice.action === "Remove task") {
        await removeTask();
    }
    else {
        console.log("\nYour To-Do List:");
        printToDoList();
    }
};
const markTaskCompleted = async () => {
    const tasksToMark = await inquirer.prompt({
        name: "tasks",
        type: "checkbox",
        message: "Select tasks to mark as completed:",
        choices: toDo.map((item, index) => ({
            name: `${index + 1}. ${item.task}`,
            value: index,
            checked: item.completed,
        })),
    });
    tasksToMark.tasks.forEach((index) => {
        toDo[index].completed = true;
    });
    console.log("\nTasks marked as completed:");
    printToDoList();
};
const removeTask = async () => {
    const tasksToRemove = await inquirer.prompt({
        name: "tasks",
        type: "checkbox",
        message: "Select tasks to remove:",
        choices: toDo.map((item, index) => ({
            name: `${index + 1}. ${item.task}`,
            value: index,
        })),
    });
    tasksToRemove.tasks.sort((a, b) => b - a); // Remove from end to start
    tasksToRemove.tasks.forEach((index) => {
        toDo.splice(index, 1);
    });
    console.log("\nRemaining tasks:");
    printToDoList();
};
const printToDoList = () => {
    toDo.forEach((item, index) => {
        const status = item.completed ? "[✓]" : "[ ]";
        console.log(`${index + 1}. ${status} ${item.task}`);
    });
};
promptUser();
