const form = document.querySelector("form").addEventListener("submit", (e)=>{
    e.preventDefault();
    const user = {
        username:document.querySelector("#username").value,
        password:document.querySelector("#password").value,
    }
    login(user);
})

async function login(user){
    let res = await fetch("https://kind-lime-chinchilla-kit.cyclic.app/users/login", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(user)
    })
    if(res.ok){
        let data = await res.json();
        localStorage.setItem("token", data.Token);
        localStorage.setItem("name", user.username);
        let show_user = document.querySelector("#show_user");
        show_user.innerText = `${(localStorage.getItem("name")).toUpperCase()} LoggedIn Success`;
    }else{
        alert("No User Found");
    }
}