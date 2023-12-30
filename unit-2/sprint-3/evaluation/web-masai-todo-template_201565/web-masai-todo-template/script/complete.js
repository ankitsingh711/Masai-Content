// Write all the JS Code related to Completed Page Here 

let completed = JSON.parse(localStorage.getItem("task-completed"))||[];
let favArr=[];
let tbody= document.querySelector("tbody");
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
        td5.innerText="Add";
        td5.addEventListener("click", ()=>{
            favArr.push(elem);
            localStorage.setItem("task-favorites", JSON.stringify(favArr));
        })
        row.append(td1,td2,td3,td4,td5);
        tbody.append(row);
    })
}

display(completed);
document.querySelector("#filter").addEventListener("change", filterTask);
function filterTask(){
    let priority = document.querySelector("#filter").value;
    if(priority==="Select Priority"){
        display(completed);
    } else{
        let filterData = completed.filter((elem)=>{
            return elem.prior==priority;
        })
        display(filterData);
    }
}



