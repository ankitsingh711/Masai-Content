// All the JS Code for the Add Students Page Goes Here
document.querySelector("form").addEventListener("submit", studentsData);

let admissionArr=JSON.parse(localStorage.getItem("admission"))||[];
function studentsData(event){
    event.preventDefault();
    let obj = {
        name:form.name.value,
        email:form.email.value,
        phone:form.phone.value,
        gender:form.gender.value,
        course:form.course.value
    }
    if(obj.name==""||obj.email==""||obj.phone==""||obj.gender==""||obj.course==""){
        alert("Please fill all the details")
    }else{
        admissionArr.push(obj);
        localStorage.setItem("admission",JSON.stringify(admissionArr));
    }
}