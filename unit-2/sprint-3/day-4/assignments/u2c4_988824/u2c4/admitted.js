// All the Code for the Admitted page goes here

let acc_data = JSON.parse(localStorage.getItem("admission-accepted"));
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

            tr.append(name,email,course,gender,phone);
            tbody.append(tr);
    })
}

displayData(acc_data)