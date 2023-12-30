document.querySelector("form").addEventListener("submit",addTodo);

ArrayTodo=JSON.parse(localStorage.getItem("todo"))||[];
var favArr=JSON.parse(localStorage.getItem("favourited"))||[];
displayTable(ArrayTodo);
function addTodo(event){
    event.preventDefault();
    let taskName = document.querySelector("#task").value;
    let taskPriority = document.querySelector("#priority").value;
    let taskObj={
        taskName:taskName,
        taskPriority:taskPriority
    }
    ArrayTodo.push(taskObj);
    localStorage.setItem("todo",JSON.stringify(ArrayTodo))
    displayTable(ArrayTodo)
}

function displayTable(ArrayTodo){
    document.querySelector("tbody").innerHTML="";
    ArrayTodo.forEach(function(elem){
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.innerText=elem.taskName;
        let td2 = document.createElement('td');
        td2.innerText=elem.taskPriority;
        if(elem.taskPriority=="High"){
            td2.style.backgroundColor="red"
        }else{
            td2.style.backgroundColor="green"
        }
        let td3 = document.createElement('td');
        td3.innerText="Add as Favourite";
        td3.addEventListener("click",function(){
            favArr.push(elem);
            localStorage.setItem("favourites",JSON.stringify(favArr));
        })
        row.append(td1,td2,td3);
        document.querySelector("tbody").append(row);
    })
}