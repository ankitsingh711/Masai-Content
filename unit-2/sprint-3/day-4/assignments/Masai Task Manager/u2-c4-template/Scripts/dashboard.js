// Write code related to dashboard page here
let taskData = JSON.parse(localStorage.getItem("task-list"));
let tbody = document.querySelector("tbody");
function displayTask(data){
    tbody.innerHTML=null;
    let taskCount = document.querySelector("#task-count");
    taskCount.innerText=data.length;
    data.forEach((elem,index)=>{
        let main = document.querySelector("tbody");
        let row = document.createElement("tr");
        let c1 = document.createElement("td");
        c1.innerText=elem.name;
        let c2 = document.createElement("td");
        c2.innerText=elem.des;
        let c3 = document.createElement("td");
        c3.innerText=elem.startDate;
        let c4 = document.createElement("td");
        c4.innerText=elem.endDate;
        let c5 = document.createElement("td");
        c5.innerText=elem.prior;
        let c6 = document.createElement("td");
        c6.innerText="Add";
        c6.addEventListener("click", function(){
            added(elem, index);
        });
        row.append(c1,c2,c3,c4,c5,c6);
        main.append(row);
    })
}

// adding to priority list
let priorArr=JSON.parse(localStorage.getItem("priority-list"))||[];
function added(elem, index){
    priorArr.push(elem);
    localStorage.setItem("priority-list", JSON.stringify(priorArr));
    taskData.splice(index,1);
    displayTask(taskData)
}

// filtering data here:

document.querySelector("#filter").addEventListener("change", filterTask);

function filterTask(){
    let priority = document.querySelector("#filter").value;
    if(priority==="Select Priority"){
        displayTask(taskData);
    } else{
        let filterData = taskData.filter((elem, index)=>{
            return priority === elem.prior;
        })
        displayTask(filterData)
    }
}

displayTask(taskData);
