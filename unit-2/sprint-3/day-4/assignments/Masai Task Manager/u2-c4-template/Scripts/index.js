// Write code related to Home page here 

document.querySelector("#form").addEventListener("submit", taskManager);
let taskArr=JSON.parse(localStorage.getItem("task-list"))||[];
function taskManager(e){
    e.preventDefault();
    let name = form.name.value;
    let des = form.desc.value;
    let startDate = form.start.value;
    let endDate = form.end.value;
    let prior = form.priority.value;
    let taskObj={
        name,
        des,
        startDate,
        endDate,
        prior
    }
    if(name==""||des==""||startDate==""||endDate==""||prior==""){
        alert("Please all the details");
    } else{
        taskArr.push(taskObj);
        localStorage.setItem("task-list", JSON.stringify(taskArr));
    }
}