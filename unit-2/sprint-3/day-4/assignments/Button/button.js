document.querySelector("#name").addEventListener("click", nameFun);

function nameFun(e){
    localStorage.setItem("username","Masai School");
}

document.querySelector("#getname").addEventListener("click", getname);

let named = (localStorage.getItem("username"));
function getname(){
    let display = document.querySelector("#displayName");
    display.innerText=named;
}

document.querySelector("#mob").addEventListener("click", mobFun);

function mobFun(){
    localStorage.setItem("mobile", "999999999");
}

document.querySelector("#getmob").addEventListener("click", getmob);

function getmob(){
    let mobile = localStorage.getItem("mobile");
    let display = document.querySelector("#displayNumber");
    display.innerText=mobile;
}

document.querySelector("#hobbies").addEventListener("click", gethobbies);
let hobbyArr=JSON.parse(localStorage.getItem("my_hobbies"))||[];
function gethobbies(){
    let hob1 = "cricket";
    let hob2 = "music";
    let obj={
        hobby1:hob1,
        hobby2:hob2
    }
    hobbyArr.push(obj);
    localStorage.setItem("my_hobbies",JSON.stringify(hobbyArr));
}

document.querySelector("#gethobbies").addEventListener("click", gethobby);

function gethobby(){
    hobbyArr.forEach((elem)=>{
        let h1 = elem.hobby1;
        let h2 = elem.hobby2;
        let display = document.querySelector("#displayHobbies");
        display.innerText=h1+","+h2;
    })
}

document.querySelector("#students").addEventListener("click", stdFunc);
let studArr = JSON.parse(localStorage.getItem("students"))||[];
function stdFunc(){
    let name1 = "Nrupul";
    let place1 = "Bangalore";
    let name2 = "Prateek";
    let place2 = "Mumbai"
    let obj1={
        name1:name1,
        place1:place1,
    }

    let obj2={
        name2:name2,
        place2:place2
    }
    studArr.push(obj1);
    studArr.push(obj2);
    localStorage.setItem("students", JSON.stringify(studArr));
}

document.querySelector("#getstudents").addEventListener("click", getStudent);

function getStudent(){
    studArr.forEach((elem)=>{
        let h2 = elem.name2+","+elem.place2;
        let display = document.querySelector("#displayStudents");
        display.innerText=h2;
    })
}