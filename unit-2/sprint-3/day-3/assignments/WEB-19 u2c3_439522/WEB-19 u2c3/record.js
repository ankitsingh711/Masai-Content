// fill in javascript code here
// fill in javascript code here
document.querySelector("form").addEventListener("submit",details);

function details(event){
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let employeeID = document.querySelector("#employeeID").value;
    let Dept = document.querySelector("#department").value;
    let exp = document.querySelector("#exp").value;
    let email = document.querySelector("#email").value;
    let mobile = document.querySelector("#mbl").value;
    let docDetails={
        name,
        employeeID,
        Dept,
        exp,
        email,
        mobile,
    }
    doctorDetails(docDetails);
}

function doctorDetails(docDetails){
    let row = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerText=docDetails.name;
    let td2 = document.createElement("td");
    td2.innerText=docDetails.employeeID;
    let td3 = document.createElement("td");
    td3.innerText=docDetails.Dept;
    let td4 = document.createElement("td");
    td4.innerText= docDetails.exp;
    let td5 = document.createElement("td");
    td5.innerText=docDetails.email;
    let td6 = document.createElement("td");
    td6.innerText=docDetails.mobile;
    let td7 = document.createElement("td");
    if(docDetails.exp > 5){
        td7.innerText="Senior"
    } else if(docDetails.exp >= 2 && docDetails.exp <= 5){
        td7.innerText="Junior";
    } else if(docDetails.exp <= 1){
        td7.innerText="Trainee";
    }
    let td8 = document.createElement("td");
    td8.innerText="Delete";
    td8.style.backgroundColor="red"
    td8.style.color="white";
    row.append(td1,td2,td3,td4,td5,td6,td7,td8);
    document.querySelector("tbody").append(row);

    td8.addEventListener("click", delet);

    function delet(){
        row.innerText="";
    }
}


