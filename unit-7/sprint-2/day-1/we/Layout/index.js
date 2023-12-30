const nav = document.querySelector(".nav");

window.addEventListener("scroll", ()=>{
    addBgNav();
});

function addBgNav(){
    if(document.body.scrollTop>50){
        nav.setAttribute("id", "nav-bg");
    }else{
        nav.removeAttribute("id", "nav-bg")
    }
}

