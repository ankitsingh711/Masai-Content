let userDetails = JSON.parse(localStorage.getItem("register"));
let tbody = document.querySelector("tbody");

function displayTable(data){
    tbody.innerHTML = null;
    let vaccinationDone=JSON.parse(localStorage.getItem("vaccination-done"))||[];
    data.forEach((elem,index)=>{
        let body = document.querySelector("tbody");
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerText = elem.id;
        let td2 = document.createElement("td");
        td2.innerText = elem.name;
        let td3 = document.createElement("td");
        td3.innerText = elem.age;
        let td4 = document.createElement("td");
        td4.innerText = elem.design;
        let td5 = document.createElement("td");
        td5.innerText = elem.prior;
        let td6 = document.createElement("td");
        td6.innerText = elem.vacc;
        let td7 = document.createElement("td");
        td7.innerText=Math.floor(Math.random()*9000+1000);
        let td8 = document.createElement("td");
        td8.innerText = "Delete";
        td8.addEventListener("click", ()=>{
            deleteData(data, index);
        })
        td8.style.backgroundColor="red";
        td8.style.color="white";
        let td9 = document.createElement("td");
        td9.innerText = "Vaccinate";
        td9.addEventListener("click", ()=>{
            let div = document.createElement("div");
            div.style.position="absolute";
            div.style.boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            div.style.textAlign="center";
            div.style.width="25%";
            div.style.marginLeft="250px"
            div.style.padding="50px";
            let otp = document.createElement("h3");
            otp.innerText="ENTER OTP";
            let input = document.createElement("input");
            input.width="100%";
            input.style.marginLeft="80px"
            input.style.display="block"
            let submit = document.createElement("button");
            submit.style.border="none";
            submit.style.color="white";
            submit.style.backgroundColor="red";
            submit.innerText='Submit';
            submit.style.padding="2px 5px";
            let current_name = elem.name;
            submit.addEventListener("click",()=>{
                let promise = new Promise((res, rej)=>{
                    if(input.value===td7.innerText){
                        res(current_name+" "+"added to the Queue")
                    }else{
                        rej("Wrong OTP");
                    }
                })
                promise
                .then((val)=>{
                    alert(val);
                    function vaccinating(){
                        alert("Vaccination in Progress")
                    }
                    setTimeout(vaccinating,5000);
                    function vaccineDone(){
                        alert("Vaccination Done");
                        vaccinationDone.push(elem);
                        localStorage.setItem("vaccination-done",JSON.stringify(vaccinationDone));
                        deleteData(data,index);
                    }
                    setTimeout(vaccineDone,10000);
                    
                })
                .catch((val)=>alert(val));
            })
            div.append(otp,input,submit);
            body.append(div);
        })
        
        td9.style.backgroundColor="green";
        td9.style.color="white";
        tr.append(td1,td2,td3,td4,td5,td6,td7,td8,td9);
        body.append(tr);
    })
}
displayTable(userDetails);

function deleteData(data, index){
    data.splice(index,1);
    localStorage.setItem("register", JSON.stringify(data));
    displayTable(data);
}


    let filterVaccine = document.querySelector("#vaccine")
    filterVaccine.addEventListener("change", filterTaskVacc);
    function filterTaskVacc(){
        if(filterVaccine.value==="Select Vaccine"){
            displayTable(userDetails)
        }else{
            let filterdatavacc = userDetails.filter((elem)=>{
                return elem.vacc == filterVaccine.value;
            })
            displayTable(filterdatavacc);
        }
    }

    let filterPrior = document.querySelector("#prior");
    filterPrior.addEventListener("change", ()=>{
        if(filterPrior=="Select Priority"){
            displayTable(userDetails);
        }else{
            let filterPriority = userDetails.filter((elem)=>{
                return elem.prior == filterPrior.value;
            })
            displayTable(filterPriority);
        }
    })

    let ageFilter = document.querySelector("#age");
    ageFilter.addEventListener("change", ()=>{
        if(ageFilter.value=="Low to High"){
            let age = [];
            let ascData = userDetails.filter((elem,index)=>{
                age.push(+elem.age);
                age.sort();
            });
            displayTable(ascData);
        } else if(ageFilter.value=="High to Low"){
            let age = [];
            let descData = userDetails.filter((elem,index)=>{
                age.push(+elem.age);
                age.sort((a,b)=>{return b-a});
                return elem.age == age;
            });
            displayTable(descData);
        }
    })



        
        