document.querySelector("form").addEventListener("submit", login);
let loginArr = JSON.parse(localStorage.getItem("signup"));

function login(event){
    event.preventDefault();
    loginArr.forEach((elem, index)=>{
        let email = document.querySelector("#email").value;
        let pass = document.querySelector("#pass").value;

        if(email==""||pass==""){
            alert("Please fill all the details")
        }else{
            filled(elem,index);
        }

        function filled(elem, index){
            // if(email!=elem.email){
            //     alert("User Not Found");
            // }

            if( elem.email==email && pass != elem.password){
                alert("Invalid Password");
            } else if(email==elem.email||pass==elem.password){
                alert("Login Success");
                window.location.href=("loginSuccess.html")
            }
        }
    })
}

