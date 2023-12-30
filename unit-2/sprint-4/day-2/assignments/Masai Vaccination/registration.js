let form = document.querySelector("form")
form.addEventListener("submit", register);

let registerArr = JSON.parse(localStorage.getItem("register"))||[];

function register(e){
    e.preventDefault();
    let flag = true;
    let id = document.querySelector("#user").value;
    let name = document.querySelector("#name").value;
    let age = document.querySelector("#age").value;
    let design = document.querySelector("#design").value;
    let prior = document.querySelector("#prior").value;
    let vacc = document.querySelector("#vacc").value;
    registerArr.forEach((elem,index)=>{
        if(elem.id===id && index!=undefined){
            flag = false;
            alert("Username already taken");
        }
    })
    if(flag==false){
        return;
    }
    if(name==""||id==""||age==""||design==""||prior==""||vacc==""){
        alert("Please fill all the details");
    }else{
        if(name.length<4 && name!=""){
            alert("Name should be equal to greater than 4");
            return;
        }
        if(age<18 || age>40){
            alert("Age should be between 18 and 40");
            return;
        }
        let obj={
            id,name,age,design,prior,vacc
        }
        registerArr.push(obj);
        localStorage.setItem("register", JSON.stringify(registerArr));
        window.location.href="dashboard.html";
    }
    
    
}