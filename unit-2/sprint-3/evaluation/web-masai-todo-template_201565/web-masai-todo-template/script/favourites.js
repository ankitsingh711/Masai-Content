// Write all the JS Code related to Favourites Page Here 

let fav = JSON.parse(localStorage.getItem("task-favorites"))||[];
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
        row.append(td1,td2,td3,td4);
        tbody.append(row);
    })
}

display(fav);
