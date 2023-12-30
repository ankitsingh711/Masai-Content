// Write all the JS Code related to Home Page Here 

document.querySelector("form").addEventListener("submit", task);
let taskArr = JSON.parse(localStorage.getItem("task"))||[];
function task(e){
    let name = document.querySelector("#name").value;
    let type = document.querySelector("#type").value;
    let date = document.querySelector("#date").value;
    let prior = document.querySelector("#priority").value;
    let obj={
        name,
        type,
        date,
        prior
    }
    taskArr.push(obj);
    localStorage.setItem("task",JSON.stringify(taskArr));
}
let taskCompleted=[];
let tbody = document.querySelector("tbody");
function display(data){
    tbody.innerHTML=null;
    data.forEach((elem, index)=>{
        let tbody = document.querySelector("tbody");
        let row = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText=elem.name;
        let td2 = document.createElement("td");
        td2.innerText=elem.type;
        let td3 = document.createElement("td");
        td3.innerText=elem.date;
        let td4 = document.createElement("td");
        td4.innerText=elem.prior;
        let td5 = document.createElement("td");
        td5.innerText="Completed";
        td5.addEventListener("click", ()=>{
            taskCompleted.push(elem);
            localStorage.setItem("task-completed", JSON.stringify(taskCompleted));
            taskList(data, index);
        })
        row.append(td1,td2,td3,td4,td5);
        tbody.append(row);
    })
}
display(taskArr);

function taskList(data, index){
    data.splice(index, 1);
    localStorage.setItem("task", JSON.stringify(data));
    display(data);
}
