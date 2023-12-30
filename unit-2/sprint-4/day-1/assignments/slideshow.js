let url = "https://dummyjson.com/products";
fetch(url)
.then((res)=> res.json())
.then((data)=> (displaySlide(data.products)))
.catch((err)=> console.log(err));

function displaySlide(data){
    data.forEach((elem)=>{
        images.push(elem.thumbnail);
    })
}

let images = [];
let count=0;

function changeImg(){
    let img = document.querySelector("#slide");
    img.src = images[count];
    if(count < images.length-1){
        count++;
    }else{
        count=0
    }

    let x = setInterval(changeImg, 3000);

    let lbutton = document.querySelector("#lbtn");
    lbutton.addEventListener("click", ()=>{
        clearInterval(x);
        count--;
        img.src=images[count];
    })

    let rbutton = document.querySelector("#rbtn");
    rbutton.addEventListener("click", ()=>{
        clearInterval(x);
        count++;
        img.src=images[count];
    })
}

window.onload = changeImg;

