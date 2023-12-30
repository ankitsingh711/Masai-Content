let url = "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products";

async function getData()
{
  let res = await fetch(url);
  let data = await res.json();
  display(data.data);
}

getData();

let main = document.querySelector("#main");
function display(data)
{
    data.map((elem)=>{
        let div = document.createElement("div");
        let img = document.createElement("img");
        let title = document.createElement("h3");
        let price = document.createElement("h4");
        img.src = elem.image;
        title.innerText = `Title: ${elem.title}`;
        price.innerText = `Price: ${elem.price}`;
        div.append(img,title,price);
        main.append(div);
      })
}