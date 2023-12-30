const form = document.querySelector("form").addEventListener("submit", signup);

function signup(e){
  e.preventDefault();
  let username = document.querySelector("#username").value;
  let email = document.querySelector("#email").value;
  let role = document.querySelector("#role").value;
  let password = document.querySelector("#password").value;
  let user = {
    username:username,
    email:email,
    role:role,
    password:password
  }
  signUp(user);
}

async function signUp(obj){
  let res = await fetch("https://kind-lime-chinchilla-kit.cyclic.app/users/signup", {
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(obj)
  })
  if(res.ok){
    alert(`${obj.username} User Registered`);
    window.location.href = "login.html";
  }else{
    alert(`${obj.username} can't registered. Please try again`);
  }
}