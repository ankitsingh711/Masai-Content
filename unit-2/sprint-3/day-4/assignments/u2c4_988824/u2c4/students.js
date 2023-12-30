// All the Code for All Students Page Goes Here
// get data from local storage
// catch the table from html page
// append data to table
// create rejected data
// delete data from admission data
// create a filter funcion
// display data

let LSData = JSON.parse(localStorage.getItem("admission"));
let tbody = document.querySelector("tbody");

function displayData(data){
    tbody.innerHTML=null;
    data.forEach((elem,index)=>{
        let tr = document.createElement("tr");
        let name = document.createElement("td");
            name.innerText=elem.name;
        let email = document.createElement("td");
            email.innerText=elem.email;
        let phone = document.createElement("td");
            phone.innerText=elem.phone;
        let gender = document.createElement("td");
            gender.innerText=elem.gender;
        let course = document.createElement("td");
            course.innerText=elem.course;
        let acc = document.createElement("td");
        acc.style.backgroundColor="green";
        acc.style.color="white"
        acc.innerText="Accept";
        acc.style.border="2px solid white"
        acc.style.textAlign="center"

        acc.addEventListener("click", ()=>{
            acceptStudents(elem,index);
        });

        // Rejected part starts here
        let rej = document.createElement("td");
        rej.style.backgroundColor="red";
        rej.style.color="white"
        rej.innerText="Reject";
        rej.style.border="2px solid white"
        rej.style.textAlign="center"
        rej.style.padding="4px 10px";

        rej.addEventListener("click", ()=>{
            rejStudents(elem,index);
            console.log("Rejected")
        })
            tr.append(name,email,course,gender,phone,acc,rej);
            tbody.append(tr);
    })
}

// Accepted Students
let accptArr=JSON.parse(localStorage.getItem("admission-accepted"))||[];
function acceptStudents(elem,index){
    accptArr.push(elem);
    localStorage.setItem("admission-accepted",JSON.stringify(accptArr));
    LSData.splice(index,1);
    displayData(LSData);
}

//Rejected Students 

let rejArr=JSON.parse(localStorage.getItem("admission-rejected"))||[];
function rejStudents(elem,index){
    rejArr.push(elem);
    localStorage.setItem("admission-rejected",JSON.stringify(rejArr));
    LSData.splice(index,1);
    displayData(LSData);
}

document.querySelector("#filter").addEventListener("change", filterData);

function filterData(){
    let course = document.querySelector("#filter").value;
    if(course=="All"||course=="Filter By Course"){
        displayData(LSData);
    } else{
        let filtered = LSData.filter((elem)=>{
            return elem.course==course;
        })
        displayData(filtered);
    }
}

displayData(LSData);    
