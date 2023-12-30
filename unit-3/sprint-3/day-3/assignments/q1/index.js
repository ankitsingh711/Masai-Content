let url = "https://jsonplaceholder.typicode.com/todos";

async function data(){
    let res = await fetch(url);
    let d = await res.json();
    display(d);
}
data()

function display(data){
    let dataNew = data.filter((elem)=>{
        return elem.completed===false;
    });
    console.log(dataNew)
    dataNew.forEach(elem => {
        let tbody = document.querySelector("#tbody");
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        td1.innerText = elem.userId;
        td2.innerText = elem.title;
        td3 .innerText = elem.completed;
        tr.append(td1,td2,td3);
        tbody.append(tr);
    });
}