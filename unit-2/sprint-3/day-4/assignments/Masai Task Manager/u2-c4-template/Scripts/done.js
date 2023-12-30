// Write code related to Done page here

let done = JSON.parse(localStorage.getItem("done-list"));
let tbody = document.querySelector("tbody");
function displayTask(data){
    tbody.innerHTML=null;
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
        row.append(c1,c2,c3,c4,c5);
        main.append(row);
    })
}

displayTask(done);