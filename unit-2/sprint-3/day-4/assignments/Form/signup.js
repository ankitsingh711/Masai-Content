document.querySelector("form").addEventListener("submit", signUp);

let signUpArr=JSON.parse(localStorage.getItem("signup"))||[];
function signUp(event){
    event.preventDefault();
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#pass").value;
    let mobile = document.querySelector("#mob").value;
    let signObj={
        email:email,
        password:password,
        phone:mobile
    }

    if(email==""||password==""||mobile==""){
        alert("Please fill all the details")
    } else{
        signUpArr.push(signObj);
        localStorage.setItem("signup",JSON.stringify(signUpArr));
        alert("SignUp Successful")
        window.location.href="login.html";  
    }
}