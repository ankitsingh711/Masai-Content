// Write code related to Home page here 

const allTaskData = JSON.parse(localStorage.getItem("task-list"))||[];

const taskForm = document.querySelector("form");

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const taskData = {
        name:document.querySelector("#name").value,
        description: document.querySelector("#desc").value,
        startDate: document.querySelector("#start").value,
        endDate: document.querySelector("#end").value,
        priority: document.querySelector("#priority").value
    }

    allTaskData.push(taskData);

    localStorage.setItem("task-list", JSON.stringify(allTaskData));
    alert("Task added");
});


